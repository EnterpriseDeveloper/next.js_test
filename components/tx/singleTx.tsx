export default function SingleTx(props: any) {
  return (
    <div style={{textAlign: "center"}}>
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
