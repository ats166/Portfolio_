import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import tw, { styled } from "twin.macro";

export default function ProjectBSection(props) {
  const [ref, inView] = useInView({ threshold: 0.3 });
  const [run, setRun] = useState("paused");

  useEffect(() => {
    if (inView) {
      setRun("running");
    } else {
    }
  }, [inView]);

  return (
    <Container ref={ref}>
      <ContentContainer>
        <PlanningSection run={run}>서비스 소개</PlanningSection>
        <PlanningBox run={run} time={0.3}>
          {props.data}
        </PlanningBox>
        <ContentImgSection run={run} time={0.6}></ContentImgSection>
      </ContentContainer>
      <BackGround />
    </Container>
  );
}

const Container = styled.div`
  ${tw`relative w-full flex font-intro h-[125vh]`}
`;

const ContentContainer = styled.div`
  ${tw`w-[1152px] mx-auto z-10`}
`;

const PlanningSection = styled.div`
  ${tw`mt-[4%] ml-[5%] mb-[2%] text-6xl max-h-[10%]`}

  animation-name: Tuptext;
  animation-duration: 1s;
  animation-fill-mode: both;
  animation-delay: ${(props) => props.time}s;
  animation-play-state: ${(props) => props.run};

  @keyframes Tuptext {
    0% {
      opacity: 0;
      transform: translateY(20%);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
`;

const PlanningBox = styled.div`
  ${tw`text-2xl max-h-[20%]`}
  white-space: pre-line;
  line-height: 50px;

  animation-name: Tuptext;
  animation-duration: 1s;
  animation-fill-mode: both;
  animation-delay: ${(props) => props.time}s;
  animation-play-state: ${(props) => props.run};
`;

const BackGround = styled.div`
  ${tw`absolute inset-0 w-full h-[125vh] z-0 bg-gray-200`}
`;

const ContentImgSection = styled.div`
  ${tw`border border-black h-[80%]`}

  animation-name: Tuptext;
  animation-duration: 1s;
  animation-fill-mode: both;
  animation-delay: ${(props) => props.time}s;
  animation-play-state: ${(props) => props.run};
`;
