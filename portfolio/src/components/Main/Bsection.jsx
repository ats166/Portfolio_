import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import tw, { styled } from "twin.macro";

import tools from "../../assets/UsingTools.gif";
import FrontSkills from "./Bsection/FrontSkills";
import OtherSkills from "./Bsection/OtherSkills";

export default function Bsection() {
  const [ref, inView] = useInView({ threshold: 0.7 });
  const [run, setRun] = useState("paused");
  const [skills, setSkills] = useState(0);

  useEffect(() => {
    if (inView) {
      setRun("running");
    } else {
    }
  }, [inView]);

  const handleFrontTap = () => {
    setSkills(0);
  };

  const handleOtherTap = () => {
    setSkills(1);
  };

  return (
    <SectionContainer ref={ref}>
      <LeftSection>
        <Introduce run={run}>
          제가 사용했던 기술들을 소개합니다 <ToolsGIF src={tools} alt="기술" />
        </Introduce>
      </LeftSection>
      <RightSection>
        <div className="pt-[10%]">
          <FrontButton onClick={handleFrontTap} skills={skills}>
            Front
          </FrontButton>
          <OtherButton onClick={handleOtherTap} skills={skills}>
            Other
          </OtherButton>
        </div>
        {skills === 0 ? <FrontSkills run={run} /> : <OtherSkills run={run} />}
      </RightSection>
    </SectionContainer>
  );
}

const SectionContainer = styled.div`
  ${tw`min-h-[100vh] flex `}

  @media screen and (max-width: 800px) {
    ${tw`flex-col items-center mt-[10%] w-full`}
  }
`;

const LeftSection = styled.div`
  ${tw`w-[40%] min-h-full flex justify-center items-center pb-[30%] `}

  @media screen and (max-width: 800px) {
    ${tw`w-full pb-[10%]`}
  }
`;

const Introduce = styled.div`
  ${tw`text-5xl w-[70%] font-bold break-keep flex items-end `}

  @media screen and (max-width: 960px) {
    ${tw`text-4xl`}
    line-height: 60px;
  }

  line-height: 80px;

  animation-name: uptext;
  animation-duration: 2s;
  animation-play-state: ${(props) => props.run};

  @keyframes uptext {
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

const ToolsGIF = styled.img`
  ${tw`h-24 w-24`}
  display:inline;
  transform: translateY(15%);
`;

const RightSection = styled.div`
  ${tw`w-[60%] min-h-full min-w-[200px]`}

  @media screen and (max-width: 800px) {
    ${tw`w-[90%]`}
  }
`;

const FrontButton = styled.button`
  ${tw`h-12 w-36 text-xl`}
  transform: translateY(2px);

  @media screen and (max-width: 800px) {
    ${tw`w-[100%]`}
  }

  ${(props) =>
    props.skills === 0
      ? tw`bg-my-blue rounded-t-xl text-white`
      : tw`border rounded-t-xl`}
`;

const OtherButton = styled.button`
  ${tw`h-12 w-36 text-xl`}
  transform: translateY(2px);

  @media screen and (max-width: 800px) {
    ${tw`w-[100%] rounded-none`}
  }

  ${(props) =>
    props.skills === 1
      ? tw`bg-gray-100 rounded-t-xl `
      : tw`border rounded-t-xl`}
`;
