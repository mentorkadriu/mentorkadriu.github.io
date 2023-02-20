import React from "react";
import JobExperience from "../JobExperience/JobExperience";
import List from "../List/List";
import CvSection from "../CvSection/CvSection";

export default function Experience() {
  return (
    <CvSection title="Experience">
      <JobExperience
        className={"first:mt-0"}
        title={"Senior Front-end Developer, Team Leader, Project Leader"}
        company={{name:"Jaywalker digital", link: "https://jaywalker.ch"}}
        period={"2015 - present"}
        description={`Working as Senior Front-end Developer with awesome people, passionate and motivated team. 
            Bringing closer together companies and consumers by building great web-apps. Currently building own products.`} />
      <h5>Main activities:</h5>
      <List>
        <li>
          Build SPA with React, Nextjs, Vue.
        </li>
        <li>Build UI of Web-app using Symfony, API Platform, vanilla PHP and Wordpress</li>
      </List>
      <h5>Responsibilities:</h5>
      <List>
        <li>
          Work closely with design, product management, and
          development teams to create elegant, usable,
          responsive and interactive interfaces across multiple
          devices.
        </li>
        <li>
          Turning UI/UX designs into prototypes, creating excellent
          interactions from designs, writing reusable content modules and maintainability of the code.
        </li>
        <li>
          Implement Ul development principles to ensure that the
          product client-side serves at scale.
        </li>
        <li>
          Review and optimize the app usage by monitoring key
          metrics and rectifying the issues proactively.
        </li>
        <li>
          An ability to perform well in a fast-paced environment
          and bring in optimal flow for rapidly changing
          design/ technology.
        </li>
      </List>
      <JobExperience
        title={"Full-Stack Developer"}
        company={{name:"Freelance"}}
        period={"JAN 2015 - OCT 2015"}
        description={"Developed projects using techs such Reactjs, Angular, jQuery, Wordpress (a bit of PHP), Expressjs, Mongodb."} />
      <JobExperience
        title={"Front-end Developer and CMS Admin"}
        company={{name:"Albasoftgroup", link: "https://www.albasoftgroup.com/en/Home"}}
        period={"MAR 2014 - DEC 2015"}
        description={`Developed websites for multiple local businesses and companies using Albasoft CMS. 
            The time when browsers updated almost daily and front-end development process exploded. 
            CSS frameworks popping up, like foundation, bootstrap, base and many many other.`} />
      <h5 className={"mt-3"}>Worked with:</h5>
      <ul className={"list-disc p-4"}>
        <li>Albasoft CMS</li>
        <li><a href="https://nodejs.org/en/">Nodejs</a></li>
        <li>CSS, <a href="https://sass-lang.com/">SASS</a> with <a href="http://compass-style.org/">Compass</a>,
          then <a href="https://gulpjs.com/">Gulpjs</a> <a href="https://bower.io/">Bower</a></li>
        <li>HTML, preprocessors
          like <a href="https://haml.info/">HAML</a>
          , <a href="https://mustache.github.io/">mustache</a>
          , <a href="https://jade-lang.com/">JADE</a>
        </li>
        <li>
          JS, jQuery (was a thing at that time), jQuery plugins, micro JS libraries
        </li>
      </ul>
      <JobExperience
        title={"Freelancer"}
        period={"MAY 2013 - MAR 2014"}
        company={{name: "Freelance"}}
        description={`Got into programming. 
            Loved converting web designs into code. 
            Sublime Text editor with Monakai theme was my first carsh.`}/>
    </CvSection>
  )
}
