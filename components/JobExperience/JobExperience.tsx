import React from "react";

interface IJobExperience extends React.HTMLAttributes<HTMLElement>{
  title: string;
  company: {
    name: string;
    link?: string;
  };
  period: string;
  description: string;
}
export default function JobExperience({title, company, period, description, ...rest}: IJobExperience) {
  const { name, link } = company;
  return (
    <div className={"mt-4"} {...rest}>
      <h4 className={"font-semibold mb-2"}>{title}</h4>
      <div className={"flex justify-between mb-2"}>
        <a className={"decoration-0 text-neutral-500"} href={link || ""} target="_blank" rel="noreferrer">{name}</a>
        <span className={"text-neutral-400"}>{period}</span>
      </div>
      <p>{description}</p>
    </div>
  )
}
