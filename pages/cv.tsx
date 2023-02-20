import Head from "next/head";
import Image from "next/image";
import download from "../public/assets/download.svg";
import Contact from "../components/Contact/Contact";
import Profile from "../components/CV/Profile";
import Skills from "../components/CV/Skills";
import Experience from "../components/CV/Experience";
import Moto from "../components/CV/Moto";

export default function CV() {
  return (
    <>
      <Head>
        <title>Mentor Kadriu - Curriculum vitae</title>
        <meta name="description" content="Mentor Kadriu - Curriculum Vitae" />
      </Head>

      <main>
        <section>
          <div className="container mx-auto flex flex-col px-4 mt-4 mb-5">
            <div className={"print:hidden lg:pt-52 "}>
              <button onClick={() => { window.print()}} className={"border rounded w-[35px] h-[35px] flex justify-center items-center"}>
                <Image src={download} alt="Download CV" width={24} height={24} />
              </button>
            </div>
            <div className="w-full">
              <h1 className={"font-light text-xl md:text-2xl lg:text-4xl mb-7 print:text-black print:mt-[40px]"}>I&apos;m <span className={"font-bold text-3xl md:text-4xl lg:text-6xl"}>Mentor Kadriu</span>, <br/>
                a Senior Front-end Developer <br/>
                based in Prishtina, Kosovo</h1>
              <Contact/>
            </div>
            <div className="w-full my-7">
              <hr className={"border-t"}/>
            </div>
          </div>
        </section>
        <Moto/>
        <Profile/>
        <Skills/>
        <div className={"break-after-page"}></div>
        <Experience/>
      </main>
    </>
  );
}
