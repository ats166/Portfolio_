import React from "react";

export default function ProjectItem(props) {
  const project = props.data;
  // const e_name = props.data.e_name;
  // const k_name = props.data.k_name;
  // const starttime = props.data.starttime;
  // const endtime = props.data.endtime;
  // const role = props.data.role;
  // const contribution = props.data.contribution;
  // const overview = props.data.overview;
  // const skills = props.data.skills;
  // const skillsReason = props.data.skillsReason;
  // const result = props.data.result;

  return (
    <>
      <div>
        {project.e_name}, {project.k_name}, {project.starttime} ~{" "}
        {project.endtime}, {project.role}, {project.contribution},{" "}
        {project.personnel}명
      </div>
      <div> {project.overview}</div>
      <div> {project.skills}</div>
      <div> {project.skillsReason}</div>
      <div> {project.result}</div>
    </>
  );
}
