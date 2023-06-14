import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import tw, { styled } from "twin.macro";

export default function ProjectBSection(props) {
  const [ref, inView] = useInView({ threshold: 0.3 });
  const [run, setRun] = useState("paused");
  const [mode, SetMode] = useState("web");

  useEffect(() => {
    if (props.data.e_name === "Zzalu") {
      SetMode("mobile");
    } else {
      SetMode("web");
    }
  }, []);

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
          {props.data.summary}
        </PlanningBox>
        {mode === "mobile" ? (
          <ContentImgSection run={run} time={0.6}>
            {props.data.introduceimg.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center min-h-[60%] min-w-[20%] mx-8"
              >
                <div className="h-full w-full">
                  <img src={item} alt="" className="h-full w-full" />
                </div>
                <div className="mt-4">{props.data.introducetext[idx]}</div>
              </div>
            ))}
          </ContentImgSection>
        ) : (
          <ContentImgSection run={run} time={0.6}>
            {props.data.introduceimg.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center min-w-[60%] mx-12"
              >
                <div className="w-full">
                  <img src={item} alt="" className="h-full w-full" />
                </div>
                <div className="my-4">{props.data.introducetext[idx]}</div>
              </div>
            ))}
          </ContentImgSection>
        )}
      </ContentContainer>
      <BackGround />
    </Container>
  );
}

const Container = styled.div`
  ${tw`relative w-full flex font-intro min-h-[100vh] pb-2`}
`;

const ContentContainer = styled.div`
  ${tw`w-[1152px] mx-auto z-10 h-full`}
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
  ${tw`text-2xl max-h-[20%] mb-20`}
  white-space: pre-line;
  line-height: 50px;

  animation-name: Tuptext;
  animation-duration: 1s;
  animation-fill-mode: both;
  animation-delay: ${(props) => props.time}s;
  animation-play-state: ${(props) => props.run};
`;

const BackGround = styled.div`
  ${tw`absolute inset-0 w-full h-full z-0 bg-gray-200`}
`;

const ContentImgSection = styled.div`
  ${tw`flex overflow-x-auto mt-[15%]`}

  ::-webkit-scrollbar {
    height: 20px;
  }

  ::-webkit-scrollbar-thumb {
    width: 10%;
    background: #abc4ff;

    border-radius: 20px;
  }

  ::-webkit-scrollbar-track {
    background: rgba(33, 122, 244, 0.1);
    border-radius: 20px;
  }

  animation-name: Tuptext;
  animation-duration: 1s;
  animation-fill-mode: both;
  animation-delay: ${(props) => props.time}s;
  animation-play-state: ${(props) => props.run};
`;
