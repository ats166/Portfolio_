import React from "react";

export default function ProjectItem(props) {
  const name = props.data.name;
  return <div>{name}</div>;
}
