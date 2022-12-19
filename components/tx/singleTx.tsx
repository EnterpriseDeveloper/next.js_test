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
        <b>Tx_status:</b> {props.props.tx.tx_status}
      </p>
      <p>
        <b>Tx_type:</b> {props.props.tx.tx_type}
      </p>
      <p>
        <b>Sender_address:</b> {props.props.tx.sender_address}
      </p>
    </div>
  );
}
