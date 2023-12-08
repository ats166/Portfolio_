import React from "react";
import tw, { styled } from "twin.macro";
import ProjectItem from "../components/Project/ProjectItem";
import project from "../assets/Project.json";
import Footer from "../components/Footer";

export default function ProjectPage() {
  return (
    <>
      <Container>
        <ItemBox>
          {project.ProjectList.map((data) => (
            <ProjectItem data={data} key={data.id} />
          ))}
        </ItemBox>
      </Container>
      <Footer />
    </>
  );
}

const Container = styled.div`
  ${tw`max-w-[1152px] mx-auto`}
`;

const ItemBox = styled.div`
  ${tw`flex flex-wrap justify-center`}
`;
