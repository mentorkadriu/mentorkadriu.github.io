import Link from "next/link";
import React from "react";

export default function Contact() {
  return (
    <ul className={"list-none p-0 m-0"}>
      <li>
        <span className={"inline-block w-1/4 font-medium mb-1"}>Mobile:</span> <Link href="tel:+38349828823" className={"no-underline"}>+38349828823</Link>
      </li>
      <li>
        <span className={"inline-block w-1/4 font-medium mb-1"}>Email:</span> <Link href="mailto:mentorkadriu@gmail.com" className={"no-underline"}>mentorkadriu@gmail.com</Link>
      </li>
      <li>
        <span className={"inline-block w-1/4 font-medium mb-1"}>Website:</span> <Link target="_blank" href="https://mentorkadriu.com" className={"no-underline"} rel="noreferrer">mentorkadriu.com</Link>
      </li>
      <li>
        <span className={"inline-block w-1/4 font-medium"}>Github:</span> <Link target="_blank" href="https://www.github.com/mentorkadriu/" className={"no-underline"} rel="noreferrer">github.com/mentorkadriu</Link>
      </li>
      <li>
        <span className={"inline-block w-1/4 font-medium"}>LinkedIn:</span> <Link target="_blank" href="https://www.linkedin.com/in/mentor-kadriu-2a85a512b/" className={"no-underline"} rel="noreferrer">linkedin.com/in/mentor-kadriu</Link>
      </li>
    </ul>
  )
}
