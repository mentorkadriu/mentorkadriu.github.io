import React from "react";
import {useRouter} from "next/router";
import Link from "next/link";
import style from "./NavLink.module.css";

export default function NavLink({href, children}) {
  const router = useRouter();
  const isActive = router.asPath === href;
  return (
    <Link href={href} passHref={true}>
      <a className={`uppercase font-light no-underline hover:underline ${isActive ? style.active: ''}`}>
        {children}
      </a>
    </Link>
  )

};
