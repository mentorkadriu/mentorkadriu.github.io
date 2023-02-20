import Head from "next/head";
import Navigation from "../components/Navigation/Navigation";
import Socials from "../components/Socials/Socials";
import Intro from "../components/Intro/Intro";

export default function Home() {
  return (
    <>
      <Head>
        <title>Mentor Kadriu - Senior Frontend developer</title>
        <meta name="description" content="Mentor Kadriu personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <main className="min-h-screen flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center">
            <Intro />
            <Navigation/>
            <Socials/>
          </div>
        </main>
    </>
  );
}

