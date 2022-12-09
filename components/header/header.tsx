import Link from "next/link";
import React, { Fragment } from "react";

function Header() {
    return(
        <Fragment>
            <Link href="/">
                My TODO
            </Link>
            <nav>
                <ul>
                    <li>
                        <Link href='/create'>Create</Link>
                    </li>
                    <li>
                        <Link href='/contact'>Contract</Link>
                    </li>
                </ul>
            </nav>
        </Fragment>
    )
}

export default Header;
