import React from "react";
import JobExperience from "../JobExperience/JobExperience";
import List from "../List/List";
import CvSection from "../CvSection/CvSection";

export default function Experience() {
  return (
    <CvSection title="Experience">

      {/* Planovo */}
      <JobExperience
        className={"first:mt-0"}
        title={"Lead Frontend Developer"}
        company={{ name: "Planovo", link: "https://planovo.com" }}
        period={"Jul 2024 – Present"}
        description={"Led frontend architecture and development of a complex scheduling and workforce management SaaS platform."} />
      <List>
        <li>Architected SSR/SSG routes with Next.js and client-side data-driven routing with React Router</li>
        <li>Built and maintained a shared component library and design system across multiple product areas</li>
        <li>Integrated APIs with RTK Query using typed contracts; owned caching strategies and error handling</li>
        <li>Delivered advanced modules: scheduling engine, time tracking, dashboards, and multi-region settings</li>
        <li>Implemented full i18n support with locale-aware routing and content pipelines across languages</li>
        <li>Shipped PWA and Capacitor features to achieve full mobile parity with the web app</li>
        <li>Managed feature flag rollouts and safe rollback strategies for incremental releases</li>
      </List>
      <p className={"text-sm text-gray-400 mt-2"}>Stack: React, TypeScript, Next.js, Vite, Tailwind CSS, RTK Query, Capacitor</p>

      {/* Jaywalker */}
      <JobExperience
        title={"Senior Software Developer"}
        company={{ name: "Jaywalker Digital", link: "https://jaywalker.ch" }}
        period={"Sep 2015 – Jul 2024"}
        description={"Senior developer at a digital agency delivering projects for international clients across e-commerce, media, and enterprise. (Concurrent with Planovo from Jul 2024)"} />
      <List>
        <li>Built SPAs and marketing sites with React, Next.js, Vue, and TypeScript</li>
        <li>Developed full-stack web apps using Symfony, API Platform, and WordPress</li>
        <li>Collaborated with design and product teams to turn Figma specs into responsive, accessible UIs</li>
        <li>Reviewed code, mentored junior developers, and maintained code quality standards</li>
      </List>
      <p className={"text-sm text-gray-400 mt-2"}>Stack: React, Next.js, Vue, TypeScript, Tailwind CSS, Symfony, API Platform, WordPress, GraphQL</p>

      {/* Charter */}
      <JobExperience
        title={"Senior Software Developer"}
        company={{ name: "Charter Communications (NASDAQ: CHTR)", link: "https://corporate.charter.com" }}
        period={"Dec 2022 – Oct 2023"}
        description={"Contracted to a major US telecommunications company to build internal tooling and customer-facing React interfaces."} />
      <List>
        <li>Built accessible React components with MUI; implemented pixel-perfect Figma designs</li>
        <li>Created API mocks to unblock frontend work from backend dependencies</li>
        <li>Optimised component performance and ensured scalability across screen sizes</li>
        <li>Participated in Agile ceremonies: standups, sprint planning, and retrospectives</li>
      </List>
      <p className={"text-sm text-gray-400 mt-2"}>Stack: React, MUI, TypeScript, Git, CI/CD</p>

      {/* Freelance 2015 */}
      <JobExperience
        title={"Freelance Front-End & Back-End Developer"}
        company={{ name: "Freelance" }}
        period={"Jan 2015 – Sep 2015"}
        description={"Built client websites and apps using React, Angular, jQuery, WordPress, Express.js, and MongoDB."} />

      {/* Albasoft */}
      <JobExperience
        title={"CMS Administrator & Web Developer"}
        company={{ name: "Albasoft", link: "https://www.albasoftgroup.com/en/Home" }}
        period={"Feb 2014 – Dec 2014"}
        description={"Built and administered websites for local businesses using Albasoft CMS, HTML, CSS, SASS, and JavaScript."} />

    </CvSection>
  );
}
