import type { GetServerSidePropsContext } from "next";

import Transactions from "../components/tx/tx";
import { getDehydratedStateFromSession } from "../helpers/wallet/session-helpers";
import { getAllTxAPI } from "../helpers/dataFetcher/get";

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  return {
    props: {
      dehydratedState: await getDehydratedStateFromSession(ctx),
      txMempool: await getAllTxAPI(),
    },
  };
}

export default function HomePage(props: any) {
  return <Transactions props={props} />;
}
