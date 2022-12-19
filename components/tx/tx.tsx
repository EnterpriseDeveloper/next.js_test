import { useAccount } from "@micro-stacks/react";
import classes from "./tx.module.css";
import { Table } from "react-bootstrap";
import Link from "next/link";

export default function Transactions(props: any) {
  const { stxAddress } = useAccount();

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
          {props.props.txMempool.results.map((x: any) => (
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
