import type { GetServerSidePropsContext } from "next";

import Transactions from "../components/tx/tx";
import { getDehydratedStateFromSession } from "../helpers/session-helpers";

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  return {
    props: {
      dehydratedState: await getDehydratedStateFromSession(ctx),
    },
  };
}

export default function HomePage() {
  return <Transactions />;
}
