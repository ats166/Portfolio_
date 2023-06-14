import React, { useEffect } from "react";
import tw, { styled } from "twin.macro";
import { useLocation } from "react-router-dom";
import ProjectASection from "../components/Project/ProjectASection";
import ProjectBSection from "../components/Project/ProjectBSection";
import ProjectCSection from "../components/Project/ProjectCSection";
import ProjectDSection from "../components/Project/ProjectDSection";
import { useInView } from "react-intersection-observer";

export default function DetailPage() {
  const location = useLocation();
  const [ref, inView] = useInView({ threshold: 0.5 });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleGoTop = () => {
    window.scrollTo({ top: 0 });
  };

  const data = location.state.data;
  return (
    <>
      {inView === false ? <GoTop onClick={handleGoTop}>▲</GoTop> : null}
      <Container ref={ref}>
        <ProjectASection data={data} />
      </Container>
      <ProjectBSection data={data} />
      <ProjectCSection data={data.trouble} />
      <ProjectDSection data={data.other} />
    </>
  );
}

const Container = styled.div`
  ${tw`max-w-[1152px] mx-auto`}
`;

const GoTop = styled.button`
  ${tw`fixed bottom-8 right-[5%] border-2 p-2 h-12 w-12 rounded-full text-black z-30 bg-my-blue text-white`}

  cursor:pointer;
`;
