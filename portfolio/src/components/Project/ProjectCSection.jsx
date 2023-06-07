import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import tw, { styled } from "twin.macro";

export default function ProjectCSection(props) {
  const [ref, inView] = useInView({ threshold: 0.1 });
  const [run, setRun] = useState("paused");

  console.log("c", props.data.troubleimg[1]);

  useEffect(() => {
    if (inView) {
      setRun("running");
    } else {
    }
  }, [inView]);

  return (
    <Container ref={ref}>
      <ContentContainer>
        <PlanningSection run={run}>How I did?</PlanningSection>
        <PlanningItemList>
          {props.data.troublename.map((item, idx) => (
            <div key={idx}>
              <TroubleName run={run} time={idx / 2 + 0.5}>
                이슈 {idx + 1}. {item}{" "}
              </TroubleName>
              <TroubleReason run={run} time={idx / 2 + 0.6}>
                <LittleTitle>이슈 내용</LittleTitle>
                <ContentBox>{props.data.troublereason[idx]}</ContentBox>
              </TroubleReason>
              <TroubleAnswer run={run} time={idx / 2 + 0.7}>
                <LittleTitle>해결 방법</LittleTitle>
                <ContentBox>{props.data.troubleanswer[idx]}</ContentBox>
              </TroubleAnswer>
              <TroubleImage run={run} time={idx / 2 + 0.8}>
                {props.data.troubleimg[idx] === undefined ? null : (
                  <img src={props.data.troubleimg[idx]} alt="" />
                )}
              </TroubleImage>
            </div>
          ))}
        </PlanningItemList>
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

const PlanningSection = styled.div`
  ${tw`mt-[4%] text-8xl text-center`}

  animation-name: Tuptext;
  animation-duration: 1s;
  animation-fill-mode: both;
  animation-delay: ${(props) => props.time}s;
  animation-play-state: ${(props) => props.run};
`;

const PlanningItemList = styled.div`
  ${tw``}
`;

const TroubleName = styled.div`
  ${tw`text-4xl mt-[5%] font-bold`}

  animation-name: Tuptext;
  animation-duration: 1s;
  animation-fill-mode: both;
  animation-delay: ${(props) => props.time}s;
  animation-play-state: ${(props) => props.run};
`;

const TroubleReason = styled.div`
  ${tw``}

  animation-name: Tuptext;
  animation-duration: 1s;
  animation-fill-mode: both;
  animation-delay: ${(props) => props.time}s;
  animation-play-state: ${(props) => props.run};
`;

const LittleTitle = styled.div`
  ${tw`ml-[3%] text-2xl font-bold mt-[5%]`}
`;

const ContentBox = styled.div`
  ${tw`ml-[3%] mt-[1%] text-xl`}
  white-space: pre-line;
  line-height: 50px;
`;

const TroubleAnswer = styled.div`
  ${tw`mt-[5%]`}

  animation-name: Tuptext;
  animation-duration: 1s;
  animation-fill-mode: both;
  animation-delay: ${(props) => props.time}s;
  animation-play-state: ${(props) => props.run};
`;

const TroubleImage = styled.div`
  ${tw`flex justify-evenly my-10`}
  // ${(props) => (props.being === undefined ? null : tw`h-[30rem]`)}

  animation-name: Tuptext;
  animation-duration: 1s;
  animation-fill-mode: both;
  animation-delay: ${(props) => props.time}s;
  animation-play-state: ${(props) => props.run};
`;

const BackGround = styled.div`
  ${tw`absolute inset-0 w-full h-full z-0 bg-gray-400`}
`;
