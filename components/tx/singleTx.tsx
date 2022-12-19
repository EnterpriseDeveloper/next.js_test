import { useAccount } from "@micro-stacks/react";

export default function SingleTx(props: any) {
  const { stxAddress } = useAccount();

  if (!stxAddress)
    return <p style={{ textAlign: "center" }}>Please connect wallet</p>;
  return (
    <div style={{ textAlign: "center" }}>
      <p>
        <b>Anchor_mode:</b> {props.props.tx.anchor_mode}
      </p>
      <p>
        <b>Block_hash:</b> {props.props.tx.block_hash}
      </p>
      <p>
        <b>Block_height:</b> {props.props.tx.block_height}
      </p>
      <p>
        <b>Burn_block_time:</b> {props.props.tx.burn_block_time}
      </p>
    </div>
  );
}
