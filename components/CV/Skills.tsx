import React from "react";
import List from "../List/List";
import CvSection from "../CvSection/CvSection";

export default function Skills() {
  return (
    <CvSection title="Skills">
      <List className={"pt-0"}>
        <li>
          JavaScript, TypeScript, ES6, Node, GraphQL, CSS3, HTML5
        </li>
        <li>
          React, Vue, Redux, Vuex, Nuxt, Next, Strapi
        </li>
        <li>
          SCSS, Tailwindcss, BEM
        </li>
        <li>
          Webpack, Rollup, Gulp, Bower
        </li>
      </List>
    </CvSection>
  )
}
