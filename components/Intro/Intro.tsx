import React from "react";
import Image from "next/image";
import logo from "../../public/assets/mentorkadriu.jpeg";


export default function Intro() {
  return (<>
      <Image src={logo} width={150} height={150} alt="Mentor Kadriu" className={"rounded grayscale mb-4 inline-block"}/>
      <h1 className={"text-4xl md:text-6xl font-extralight mt-6 mb-2"}>Mentor Kadriu</h1>
      <h3 className={"md:text-2xl"}>Senior Front-end Developer</h3>
    </>)
}
