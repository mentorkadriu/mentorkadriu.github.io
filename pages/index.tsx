import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Socials from "../components/Socials/Socials";
import Intro from "../components/Intro/Intro";
import downloadIcon from "../public/assets/download.svg";
import emailIcon from "../public/assets/email.svg";

export default function Home() {
  return (
    <>
      <Head>
        <title>Mentor Kadriu — Senior Frontend Engineer | React · TypeScript · Next.js</title>
        <meta name="description" content="Senior Frontend Engineer with 10 years experience building production-grade web applications. Specialized in React, TypeScript, Next.js, and design systems. Currently Lead Frontend Developer at Planovo." />
        <meta property="og:title" content="Mentor Kadriu — Senior Frontend Engineer" />
        <meta property="og:description" content="10 years building production-grade web apps. React, TypeScript, Next.js specialist." />
        <meta property="og:type" content="profile" />
        <link rel="icon" href="/favicon.ico" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Mentor Kadriu",
          "jobTitle": "Senior Frontend Engineer",
          "url": "https://mentorkadriu.com",
          "sameAs": [
            "https://github.com/mentorkadriu",
            "https://www.linkedin.com/in/mentor-kadriu-2a85a512b/"
          ],
          "knowsAbout": ["React", "TypeScript", "Next.js", "Frontend Engineering", "Design Systems"]
        })}} />
      </Head>

      {/* Print button */}
      <div className="print:hidden fixed top-4 right-4 z-50">
        <button
          onClick={() => window.print()}
          className="group border border-neutral-300 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-sm hover:bg-black hover:text-white hover:border-black transition-colors"
          title="Print / Download CV"
        >
          <Image src={downloadIcon} alt="Print CV" width={18} height={18} className="brightness-0 group-hover:invert" />
        </button>
      </div>

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4 print:min-h-0 print:items-start print:text-left print:py-4 print:mb-2">
          {/* Web hero */}
          <div className="print:hidden">
            <Intro />
            <p className="mt-4 max-w-lg text-neutral-500 text-lg">
              10 years building production-grade web applications — from landing pages to complex SaaS platforms.
              Specialized in <span className="font-medium text-black">React</span>, <span className="font-medium text-black">TypeScript</span>, and <span className="font-medium text-black">Next.js</span>.
            </p>
            <div className="mt-8 flex gap-4 flex-wrap justify-center">
              <a
                href="mailto:mentorkadriu@gmail.com"
                className="group inline-flex items-center gap-2 border border-black px-6 py-2 rounded hover:bg-black hover:text-white transition-colors"
              >
                <Image src={emailIcon} width={16} height={16} alt="Email" className="brightness-0 group-hover:invert" />
                Email Me
              </a>
              <a
                href="https://www.linkedin.com/in/mentor-kadriu-2a85a512b/"
                target="_blank"
                rel="noreferrer"
                className="inline-block bg-black text-white px-6 py-2 rounded hover:bg-neutral-800 transition-colors"
              >
                LinkedIn
              </a>
              <button
                onClick={() => window.print()}
                className="group inline-flex items-center gap-2 border border-neutral-400 px-6 py-2 rounded hover:border-black hover:bg-black hover:text-white transition-colors"
              >
                <Image src={downloadIcon} width={16} height={16} alt="Download" className="brightness-0 group-hover:invert" />
                Download CV
              </button>
            </div>
            <div className="mt-10">
              <Socials />
            </div>
          </div>

          {/* Print header */}
          <div className="hidden print:block w-full">
            <h1 className="text-xl font-bold">Mentor Kadriu</h1>
            <p className="text-sm font-medium">Senior Front-end Developer</p>
            <div className="text-xs text-neutral-600 mt-1 flex flex-wrap gap-x-3 gap-y-0.5">
              <span>mentorkadriu@gmail.com</span>
              <span>+38349828823</span>
              <span>mentorkadriu.com</span>
              <span>github.com/mentorkadriu</span>
              <span>linkedin.com/in/mentor-kadriu</span>
            </div>
          </div>
        </section>

        {/* Profile Section */}
        <section className="max-w-[800px] mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/4">
              <h3 className="font-medium mb-4">// Profile</h3>
            </div>
            <div className="md:w-3/4">
              <p className="text-neutral-700 leading-relaxed">
                I am a Senior Frontend Engineer with a decade of experience architecting and delivering
                scalable web applications. Currently, I lead frontend development at{" "}
                <Link href="https://planovo.com" target="_blank" rel="noreferrer" className="underline">Planovo</Link>,
                {" "}where I drive the technical direction of a workforce management SaaS platform
                serving international clients.
              </p>
              <p className="text-neutral-700 leading-relaxed mt-4">
                My focus areas include <strong>design systems</strong>, <strong>SSR/SSG architecture</strong>,
                {" "}<strong>performance optimization</strong>, and <strong>accessibility compliance</strong>.
                I believe in writing maintainable, well-tested code that teams can build upon for years.
              </p>
            </div>
          </div>
          <hr className="border-t my-10" />
        </section>

        {/* Experience Preview */}
        <section className="max-w-[800px] mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/4">
              <h3 className="font-medium mb-4">// Experience</h3>
            </div>
            <div className="md:w-3/4 space-y-6">
              <div>
                <div className="flex justify-between items-baseline flex-wrap gap-2">
                  <h4 className="font-semibold">Lead Frontend Developer</h4>
                  <span className="text-sm text-neutral-400">Jul 2024 – Present</span>
                </div>
                <Link href="https://planovo.com" target="_blank" rel="noreferrer" className="text-neutral-500 text-sm decoration-0">Planovo · Remote (Germany)</Link>
                <p className="text-neutral-600 text-sm mt-1">Architecting Next.js SaaS with design systems, PWA features, and i18n.</p>
              </div>
              <div>
                <div className="flex justify-between items-baseline flex-wrap gap-2">
                  <h4 className="font-semibold">Senior Software Developer</h4>
                  <span className="text-sm text-neutral-400">Sep 2015 – Jul 2024</span>
                </div>
                <Link href="https://jaywalker.ch" target="_blank" rel="noreferrer" className="text-neutral-500 text-sm decoration-0">Jaywalker Digital · Remote</Link>
                <p className="text-neutral-600 text-sm mt-1">Delivered 20+ client projects across e-commerce, media, and enterprise.</p>
              </div>
              <div>
                <div className="flex justify-between items-baseline flex-wrap gap-2">
                  <h4 className="font-semibold">Senior Software Developer</h4>
                  <span className="text-sm text-neutral-400">Dec 2022 – Oct 2023</span>
                </div>
                <Link href="https://corporate.charter.com" target="_blank" rel="noreferrer" className="text-neutral-500 text-sm decoration-0">Charter Communications · Remote (US)</Link>
                <p className="text-neutral-600 text-sm mt-1">Built internal React tooling with MUI for a Fortune 500 telecom.</p>
              </div>
            </div>
          </div>
          <hr className="border-t my-10" />
        </section>

        {/* Skills Preview */}
        <section className="max-w-[800px] mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/4">
              <h3 className="font-medium mb-4">// Core Skills</h3>
            </div>
            <div className="md:w-3/4">
              <div className="flex flex-wrap gap-2">
                {["React", "TypeScript", "Next.js", "Tailwind CSS", "Redux / RTK", "Vite", "Node.js", "GraphQL", "Docker", "PWA", "i18n", "Design Systems", "Jest", "Cypress"].map((skill) => (
                  <span key={skill} className="px-3 py-1 border border-neutral-300 rounded text-sm text-neutral-700">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <hr className="border-t my-10" />
        </section>

        {/* Contact / CTA */}
        <section className="max-w-[800px] mx-auto px-4 py-8 pb-20">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/4">
              <h3 className="font-medium mb-4">// Get in Touch</h3>
            </div>
            <div className="md:w-3/4">
              <p className="text-neutral-700 mb-4">
                I am open to senior and lead frontend opportunities — especially remote roles at
                product-focused companies. If you are hiring or want to collaborate, let&apos;s talk.
              </p>
              <div className="flex gap-4 flex-wrap">
                <a
                  href="mailto:mentorkadriu@gmail.com"
                  className="inline-block border border-black px-5 py-2 rounded hover:bg-black hover:text-white transition-colors"
                >
                  mentorkadriu@gmail.com
                </a>
                <a
                  href="https://www.linkedin.com/in/mentor-kadriu-2a85a512b/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block border border-neutral-400 px-5 py-2 rounded hover:border-black hover:bg-black hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/mentorkadriu"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block border border-neutral-400 px-5 py-2 rounded hover:border-black hover:bg-black hover:text-white transition-colors"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
