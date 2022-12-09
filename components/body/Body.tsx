import React, { Fragment } from "react";
import Header from "../header/header";

function Body(props: any) {
  return (
    <Fragment>
      <Header></Header>
      <main>{props.children}</main>
    </Fragment>
  );
}

export default Body;
