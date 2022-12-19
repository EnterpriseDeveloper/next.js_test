import { Server } from "Socket.IO";
import { connectWebSocketClient } from "@stacks/blockchain-api-client";
import { wsURL } from "../../config/dataFetchConst";

const SocketHandler = (req: any, res: any) => {
  if (res.socket.server.io) {
    console.log("Socket is already running");
  } else {
    console.log("Socket is initializing");
    const io = new Server(res.socket.server);
    res.socket.server.io = io;
    io.on("connection", (socket) => {
      socket.on("tx-change", async (msg) => {
        let txs = JSON.parse(msg);
        await connectToWebSocket(socket, txs);
      });
    });
  }
  res.end();
};

const connectToWebSocket = async (socket: any, txs: string[]) => {
  try {
    const client = await connectWebSocketClient(wsURL);
    for (let i = 0; i < txs.length; i++) {
      const sub = await client.subscribeTxUpdates(txs[i], (event) => {
        socket.broadcast.emit("tx-update", {
          status: event.tx_status,
          id: event.tx_id,
        });
      });
    }
  } catch (err) {
    console.log(err);
  }
};

export default SocketHandler;
