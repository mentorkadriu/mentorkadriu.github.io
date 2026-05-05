import React from "react";
import CvSection from "../CvSection/CvSection";

export default function Profile() {
  return (
    <CvSection title="Profile">
      <p>
        Senior Frontend Engineer with 10 years of production experience — from landing pages to complex SaaS platforms.
        I specialize in <strong>React</strong>, <strong>TypeScript</strong>, and <strong>Next.js</strong> architecture.
        I care deeply about performant, maintainable, and accessible code that scales with teams and products.
      </p>
      <p className="mt-3">
        Currently leading frontend development at Planovo, where I architect design systems, implement SSR/SSG patterns,
        and ship PWA features for workforce management software. I thrive in remote, cross-functional teams
        and enjoy mentoring engineers while driving technical standards.
      </p>
    </CvSection>
  )
}
