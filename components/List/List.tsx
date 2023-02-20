import React from "react";

export default function List({children, className = ""}) {
  return(<ul className={`list-disc p-4 ${className}`}>
    {children}
  </ul>)
}
