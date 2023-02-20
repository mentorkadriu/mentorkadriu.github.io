import React from "react";
import Link from "next/link";
import {useRouter} from "next/router";
import NavLink from "./NavLink";


export default function Navigation() {
  const router = useRouter();
  const isHome = router.pathname === "/";

  return (<ul className={"flex justify-end gap-5 py-4"}>
    {!isHome && (<li>
        <NavLink href="/">
            Home
        </NavLink>
      </li>)}
    <li>
      <NavLink href="/cv">
          CV
      </NavLink>
    </li>
    <li>
      <NavLink href="/projects">
        Playground
      </NavLink>
    </li>
    <li>
      <NavLink href="/blog">
          Blog
      </NavLink>
    </li>
    </ul>)
}
