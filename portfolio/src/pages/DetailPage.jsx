import React from "react";
import tw, { styled } from "twin.macro";
import { useLocation } from "react-router-dom";
import ProjectASection from "../components/Project/ProjectASection";

export default function DetailPage() {
  const location = useLocation();

  const data = location.state.data;

  console.log(data);

  return (
    <Container>
      <ProjectASection data={data} />
    </Container>
  );
}

const Container = styled.div`
  ${tw`max-w-[1152px] mx-auto`}
`;
