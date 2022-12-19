import { getTxByIdAPI } from "../../helpers/dataFetcher/get";
import SingleTx from "../../components/tx/singleTx";

export async function getServerSideProps(ctx: any) {
  const id = ctx.query.txId;
  return {
    props: {
      tx: await getTxByIdAPI(id),
    },
  };
}

export default function TxById(props: any) {
  return <SingleTx props={props} />;
}
