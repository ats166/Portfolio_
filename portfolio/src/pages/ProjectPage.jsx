import React from "react";
import tw, { styled } from "twin.macro";
import ProjectItem from "../components/Project/ProjectItem";
import project from "../assets/Project.json";

export default function ProjectPage() {
  console.log(project);
  return (
    <Container>
      <div className="flex flex-wrap">
        {project.ProjectList.map((data) => (
          <ProjectItem data={data} key={data.id} />
        ))}
      </div>
    </Container>
  );
}

const Container = styled.div`
  ${tw`max-w-[1152px] mx-auto`}
`;
