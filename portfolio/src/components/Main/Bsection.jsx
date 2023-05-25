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
      console.log("True");
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
        <Introduce>
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
        {skills === 0 ? <FrontSkills /> : <OtherSkills />}
      </RightSection>
    </SectionContainer>
  );
}

const SectionContainer = styled.div`
  ${tw`h-[100vh] flex`}
`;

const LeftSection = styled.div`
  ${tw`w-[40%] h-full flex justify-center items-center pb-[240px] `}
`;

const Introduce = styled.div`
  ${tw`text-5xl w-[70%] font-bold break-keep flex items-end`}
  line-height:80px;
`;

const ToolsGIF = styled.img`
  ${tw`h-24 w-24`}
  transform: translateY(15%);
`;

const RightSection = styled.div`
  ${tw`w-[60%] h-full`}
`;

const FrontButton = styled.button`
  ${tw`h-12 w-36`}
  transform: translateY(2px);

  ${(props) =>
    props.skills === 0 ? tw`bg-my-blue rounded-t-xl` : tw`border rounded-t-xl`}
`;

const OtherButton = styled.button`
  ${tw`h-12 w-36`}
  transform: translateY(2px);

  ${(props) =>
    props.skills === 1 ? tw`bg-gray-100 rounded-t-xl` : tw`border rounded-t-xl`}
`;
