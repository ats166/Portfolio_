import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import tw, { styled } from "twin.macro";

export default function ProjectDSection(props) {
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
        <RetrospectSection run={run}>Project Review</RetrospectSection>
        {props.data.othername.map((item, idx) => (
          <div key={idx}>
            <RetrospectTitle run={run} time={idx / 2 + 0.3}>
              {item}
            </RetrospectTitle>
            <RetrospectContent run={run} time={idx / 2 + 0.6}>
              {props.data.othercontent[idx]}
            </RetrospectContent>
          </div>
        ))}
      </ContentContainer>
      <BackGround />
    </Container>
  );
}

const Container = styled.div`
  ${tw`relative w-full flex font-intro h-full pb-20`}
`;

const ContentContainer = styled.div`
  ${tw`w-[1152px] mx-auto z-10`}
`;

const RetrospectSection = styled.div`
  ${tw`mt-[4%] text-8xl text-center text-white`}

  animation-name: Tuptext;
  animation-duration: 1s;
  animation-fill-mode: both;
  animation-delay: ${(props) => props.time}s;
  animation-play-state: ${(props) => props.run};
`;

const RetrospectTitle = styled.div`
  ${tw`text-4xl mt-[5%] font-bold text-white`}

  animation-name: Tuptext;
  animation-duration: 1s;
  animation-fill-mode: both;
  animation-delay: ${(props) => props.time}s;
  animation-play-state: ${(props) => props.run};
`;

const RetrospectContent = styled.div`
  $${tw`pl-[5%] pt-[4%] border text-xl font-bold`}
  white-space: pre-line;
  line-height:40px;

  animation-name: Tuptext;
  animation-duration: 1s;
  animation-fill-mode: both;
  animation-delay: ${(props) => props.time}s;
  animation-play-state: ${(props) => props.run};
`;

const BackGround = styled.div`
  ${tw`absolute inset-0 w-full h-full z-0 bg-my-blue`}
`;
