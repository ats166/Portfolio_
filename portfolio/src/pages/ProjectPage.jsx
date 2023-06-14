import React from "react";
import tw, { styled } from "twin.macro";
import ProjectItem from "../components/Project/ProjectItem";
import project from "../assets/Project.json";
import Footer from "../components/Footer";

export default function ProjectPage() {
  return (
    <>
      <Container>
        <div className="flex flex-wrap justify-center">
          {project.ProjectList.map((data) => (
            <ProjectItem data={data} key={data.id} />
          ))}
        </div>
      </Container>
      <Footer />
    </>
  );
}

const Container = styled.div`
  ${tw`max-w-[1152px] mx-auto`}
`;
