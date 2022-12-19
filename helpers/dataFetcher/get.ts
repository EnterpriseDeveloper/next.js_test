import { MempoolTxURL, TxByIdURL } from "../../config/dataFetchConst";
import axios from "axios";

export const getAllTxAPI = async () => {
  const data = await axios.get(MempoolTxURL).catch((err) => {
    throw new Error(err || "Something went wrong with getAllTransactionsAPI!");
  });
  return data.data;
};

export const getTxByIdAPI = async (id: string) => {
  const data = await axios.get(`${TxByIdURL}${id}`).catch((err) => {
    throw new Error(err || "Something went wrong with getTransactionByIdAPI!");
  });

  return data.data;
};
