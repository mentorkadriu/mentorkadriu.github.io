import React from "react";
import CvSection from "../CvSection/CvSection";

const skills: { category: string; items: string[] }[] = [
  { category: "Languages", items: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3"] },
  { category: "Frameworks & Libraries", items: ["React", "Next.js", "Vue", "Redux", "RTK Query", "React Router"] },
  { category: "Styling", items: ["Tailwind CSS", "SCSS/Sass", "MUI", "Radix UI", "Bootstrap", "BEM"] },
  { category: "Tooling", items: ["Vite", "Webpack", "Babel", "Gulp", "ESLint", "Prettier"] },
  { category: "Testing", items: ["Jest", "Cypress", "Browserstack"] },
  { category: "APIs", items: ["REST", "GraphQL", "HATEOAS"] },
  { category: "Backend / Runtime", items: ["Node.js", "Express", "Supabase", "MongoDB", "Symfony"] },
  { category: "Infrastructure", items: ["Docker", "GitHub Actions", "CI/CD", "Netlify", "Vercel"] },
  { category: "Other", items: ["PWA", "Capacitor", "i18n", "Figma", "Agile / Jira / GitLab"] },
];

export default function Skills() {
  return (
    <CvSection title="Skills">
      <ul className={"list-none p-0 m-0 space-y-1"}>
        {skills.map(({ category, items }) => (
          <li key={category} className={"flex flex-wrap gap-x-2"}>
            <span className={"font-medium w-44 shrink-0"}>{category}</span>
            <span>{items.join(", ")}</span>
          </li>
        ))}
      </ul>
    </CvSection>
  );
}
