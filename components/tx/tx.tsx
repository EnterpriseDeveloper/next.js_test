import { useAccount } from "@micro-stacks/react";
import classes from './tx.module.css'

export default function Transactions() {
  const { stxAddress } = useAccount();

  if (!stxAddress) return (<p className={classes.textCenter}>Please connect wallet</p>);
  return (<h2>{stxAddress}</h2>);
}
