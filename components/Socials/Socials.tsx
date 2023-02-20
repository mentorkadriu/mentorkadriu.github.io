import React from "react";
import Image from "next/image";
import linkedin from "../../public/assets/linkedin.svg";
import github from "../../public/assets/github.svg";
import email from "../../public/assets/email.svg";

export default function Socials() {
  return (
    <ul className={"list-none flex justify-center items-center gap-4"}>
      <li>
        <a href="https://www.linkedin.com/in/mentor-kadriu-2a85a512b/"  className={"no-underline flex"} target={"_blank"} rel="noreferrer" ><Image src={linkedin} width={30} height={30} alt={"linkedin"}/></a>
      </li>
      <li>
        <a href="https://github.com/mentorkadriu" className={"no-underline flex"}><Image src={github} width={30} height={30} alt={"github"} /></a>
      </li>
      <li>
        <a href="mailto:mentorkadriu@gmail.com" className={"no-underline inline-block rounded-full bg-black h-[25px] w-[25px] flex justify-center items-center"}><Image src={email} width={15} height={15} alt={"email"} /> </a>
      </li>
    </ul>
  )
}
