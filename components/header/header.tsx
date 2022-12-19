import Link from "next/link";
import React, { Fragment } from "react";
import styles from "./header.module.css";

import { useAuth } from "@micro-stacks/react";

import { Container, Navbar, Button } from "react-bootstrap";

function Header() {
  const { openAuthRequest, isRequestPending, signOut, isSignedIn } = useAuth();
  const label = isRequestPending
    ? "Loading..."
    : isSignedIn
    ? "Sign out"
    : "Connect Stacks wallet";

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
              <Button
                variant="primary"
                onClick={async () => {
                  if (isSignedIn) await signOut();
                  else await openAuthRequest();
                }}
              >
                {label}
              </Button>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Fragment>
  );
}

export default Header;
