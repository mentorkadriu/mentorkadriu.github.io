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
        description={"Lead frontend architect for a workforce management SaaS platform serving international clients. Own the technical direction, component library, and delivery quality across multiple product areas."} />
      <List>
        <li>Architected SSR/SSG routing with Next.js App Router and client-side data-driven routing with React Router, reducing initial page load times</li>
        <li>Built and maintained a shared component library and design system used across 5+ product modules, cutting UI development time for new features</li>
        <li>Integrated REST APIs with RTK Query using fully typed contracts; designed caching strategies and global error handling patterns</li>
        <li>Delivered advanced modules: scheduling engine, time tracking, dashboards, and multi-region settings with real-time updates</li>
        <li>Implemented full i18n support with locale-aware routing, RTL handling, and content pipelines across 4+ languages</li>
        <li>Shipped PWA and Capacitor features to achieve full mobile parity with the web app, including offline support</li>
        <li>Managed feature flag rollouts and safe rollback strategies for incremental releases in a production environment</li>
        <li>Led code reviews, mentored junior engineers, and enforced TypeScript rigor and accessibility standards across the team</li>
      </List>
      <p className={"text-sm text-gray-400 mt-2"}>Stack: React, TypeScript, Next.js, Vite, Tailwind CSS, RTK Query, React Router, Capacitor, i18n</p>

      {/* Jaywalker */}
      <JobExperience
        title={"Senior Software Developer"}
        company={{ name: "Jaywalker Digital", link: "https://jaywalker.ch" }}
        period={"Sep 2015 – Jul 2024"}
        description={"Senior developer at a digital agency delivering projects for international clients across e-commerce, media, and enterprise sectors."} />
      <List>
        <li>Built SPAs, marketing sites, and web applications with React, Next.js, Vue, and TypeScript for 20+ client projects</li>
        <li>Developed full-stack web apps using Symfony, API Platform, and WordPress, owning both frontend and backend delivery</li>
        <li>Collaborated with design and product teams to translate Figma specs into responsive, accessible, and pixel-perfect UIs</li>
        <li>Reviewed code, mentored junior developers, and maintained code quality standards across multidisciplinary teams</li>
        <li>Introduced modern tooling (Vite, Tailwind CSS, TypeScript) to legacy codebases, improving DX and build performance</li>
      </List>
      <p className={"text-sm text-gray-400 mt-2"}>Stack: React, Next.js, Vue, TypeScript, Tailwind CSS, Symfony, API Platform, WordPress, GraphQL, Docker</p>

      {/* Charter */}
      <JobExperience
        title={"Senior Software Developer"}
        company={{ name: "Charter Communications (NASDAQ: CHTR)", link: "https://corporate.charter.com" }}
        period={"Dec 2022 – Oct 2023"}
        description={"Contracted to a major US telecommunications company to build internal tooling and customer-facing React interfaces at scale."} />
      <List>
        <li>Built accessible React components with MUI; implemented pixel-perfect Figma designs for internal operations dashboards</li>
        <li>Created API mocks and simulation environments to unblock frontend work from backend dependencies during active sprints</li>
        <li>Optimised component performance (memoization, lazy loading) and ensured scalability across large data sets and screen sizes</li>
        <li>Participated in Agile ceremonies and collaborated with backend engineers to design integrative REST API solutions</li>
        <li>Maintained CI/CD pipelines, versioning, and deployment processes using GitHub Actions and internal tooling</li>
      </List>
      <p className={"text-sm text-gray-400 mt-2"}>Stack: React, MUI, TypeScript, Git, CI/CD, REST APIs, Jest</p>

    </CvSection>
  );
}
