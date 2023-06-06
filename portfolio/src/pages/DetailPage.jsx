import React from "react";
import tw, { styled } from "twin.macro";
import { useLocation } from "react-router-dom";
import ProjectASection from "../components/Project/ProjectASection";
import ProjectBSection from "../components/Project/ProjectBSection";
import ProjectCSection from "../components/Project/ProjectCSection";
import ProjectDSection from "../components/Project/ProjectDSection";

export default function DetailPage() {
  const location = useLocation();

  const data = location.state.data;
  return (
    <>
      <Container>
        <ProjectASection data={data} />
      </Container>
      <ProjectBSection data={data.summary} />
      <ProjectCSection data={data.trouble} />
      <ProjectDSection data={data.other} />
    </>
  );
}

const Container = styled.div`
  ${tw`max-w-[1152px] mx-auto`}
`;
