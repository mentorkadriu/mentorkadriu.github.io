import React from "react";

export default function Contact() {
  return (
    <ul className={"list-none p-0 m-0"}>
      <li>
        <span className={"inline-block w-1/4 font-medium mb-1"}>Mobile:</span> <a href="tel:+38349828823" className={"no-underline"}>+38349828823</a>
      </li>
      <li>
        <span className={"inline-block w-1/4 font-medium mb-1"}>Email:</span> <a href="mailto:mentorkadriu@gmail.com" className={"no-underline"}>mentorkadriu@gmail.com</a>
      </li>
      <li>
        <span className={"inline-block w-1/4 font-medium mb-1"}>Website:</span> <a target="_blank" href="https://mentorkadriu.github.io" className={"no-underline"} rel="noreferrer">mentorkadriu.github.io</a>
      </li>
      <li>
        <span className={"inline-block w-1/4 font-medium"}>Github:</span> <a target="_blank" href="https://www.github.com/mentorkadriu/" className={"no-underline"} rel="noreferrer">github.com/mentorkadriu</a>
      </li>
      <li>
        <span className={"inline-block w-1/4 font-medium"}>LinkedIn:</span> <a target="_blank" href="https://www.linkedin.com/in/mentor-kadriu-2a85a512b/" className={"no-underline"} rel="noreferrer">linkedin.com/in/mentor-kadriu</a>
      </li>
    </ul>
  )
}
