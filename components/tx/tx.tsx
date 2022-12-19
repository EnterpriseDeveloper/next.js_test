import { useAccount } from "@micro-stacks/react";
import classes from "./tx.module.css";
import { Table } from "react-bootstrap";
import Link from "next/link";
import { useEffect, useState } from "react";
import io from "Socket.IO-client";
let socket;

export default function Transactions(props: any) {
  const { stxAddress } = useAccount();
  const [tx, updateTx] = useState([]);

  useEffect(() => {
    let data = props.props.txMempool.results;
    updateTx(data);
    let ids: String[] = data.map((x: any) => {
      return x.tx_id;
    });
    subscribeToWebsocket(ids);
  }, [props.props.txMempool.results]);

  const subscribeToWebsocket = async (ids: String[]) => {
    await fetch("/api/socket");
    socket = io();

    socket.on("connect", () => {
      console.log("connected");
    });

    socket.on("tx-update", (msg) => {
      let index = tx.findIndex((x: any) => {
        return x.tx_id == msg.id;
      });
      let data: any = tx;
      data[index].tx_status = msg.status;
      updateTx(data);
    });

    socket.emit("tx-change", JSON.stringify(ids));
  };

  if (!stxAddress)
    return <p className={classes.textCenter}>Please connect wallet</p>;
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Tx Id</th>
            <th>Sender Address</th>
            <th>Tx Status</th>
          </tr>
        </thead>
        <tbody>
          {tx.map((x: any) => (
            <tr key={x.tx_id}>
              <td>
                <Link href={`/tx/${x.tx_id}`}>{x.tx_id}</Link>
              </td>
              <td>{x.sender_address}</td>
              <td>{x.tx_status}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}
