import Link from "next/link";
import React, { Fragment } from "react";
import styles from "./header.module.css";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  return (
    <Fragment>
      <Navbar>
        <Container>
          <Navbar.Brand>
            <Link href="/">
              <p className={styles.logo}>Tx parser</p>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Signed in as: <a href="#login">Mark Otto</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Fragment>
  );
}

export default Header;
