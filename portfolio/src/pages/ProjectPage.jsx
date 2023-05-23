import React from "react";
import tw, { styled } from "twin.macro";
import ProjectItem from "../components/Project/ProjectItem";
import project from "../assets/Project.json";

export default function ProjectPage() {
  console.log(project);
  return (
    <Container>
      {project.ProjectList.map((data) => (
        <ProjectItem data={data} key={data.id} />
      ))}
    </Container>
  );
}

const Container = styled.div`
  ${tw`max-w-[1152px] mx-auto`}
`;
