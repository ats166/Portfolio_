import React, { useEffect, useState } from "react";
import tw, { styled } from "twin.macro";
import monitor from "../../assets/monitor.png";
import iphone from "../../assets/iphone.png";
import returnz from "../../assets/returnz.png";
import zzalu from "../../assets/zzalu.png";
import WillumpTV from "../../assets/WillumpTV.jpg";
import BuddiaryM from "../../assets/BuddiaryM.png";
import Buddiary from "../../assets/Buddiary.png";
import Nosignal from "../../assets/Nosignal.png";
import NosignalM from "../../assets/NosignalM.png";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";
import project from "../../assets/Project.json";

export default function Csection() {
  const [ref, inView] = useInView({ threshold: 0.7 });
  const [run, setRun] = useState("paused");
  const navigate = useNavigate();

  useEffect(() => {
    if (inView) {
      setRun("running");
    } else {
    }
  }, [inView]);

  const myProject = [
    [
      returnz,
      NosignalM,
      "과거 데이터 기반 모의주식 투자 게임 서비스",
      "Returnz",
    ],
    [Nosignal, zzalu, "GIF를 활용한 모바일 웹 SNS 서비스", "Zzalu"],
    [WillumpTV, NosignalM, "사용자 맞춤 영화 추천 서비스", "Willump TV"],
    [Buddiary, BuddiaryM, "키워드 기반 교환일기메이트 추천 서비스", "Buddiary"],
  ];
  const [selectNum, setSelectNum] = useState(0);

  const handleSelectNum = (n) => {
    setSelectNum(n);
  };

  const handleGoDetail = () => {
    navigate(`/project/${selectNum}`, {
      state: { data: project.ProjectList[selectNum] },
    });
  };

  return (
    <SectionContainer ref={ref}>
      <LeftSection run={run}>
        <ParentMonitor src={monitor} alt="모니터" />
        <ChildMonitor src={myProject[selectNum][0]} alt="화면" />
        <ParentIphone src={iphone} alt="핸드폰" />
        <ChildIphone src={myProject[selectNum][1]} alt="화면" />
        <ProjectIntroduce>
          <ProjectOverview onClick={handleGoDetail}>
            {myProject[selectNum][2]}
          </ProjectOverview>
          <ProjectName onClick={handleGoDetail}>
            {myProject[selectNum][3]}
          </ProjectName>
        </ProjectIntroduce>
        <RadioButtonBox>
          <SelectButton
            onClick={() => handleSelectNum(0)}
            num={selectNum}
            idx={0}
          >
            1
          </SelectButton>
          <SelectButton
            onClick={() => handleSelectNum(1)}
            num={selectNum}
            idx={1}
          >
            2
          </SelectButton>
          <SelectButton
            onClick={() => handleSelectNum(2)}
            num={selectNum}
            idx={2}
          >
            3
          </SelectButton>
          <SelectButton
            onClick={() => handleSelectNum(3)}
            num={selectNum}
            idx={3}
          >
            4
          </SelectButton>
        </RadioButtonBox>
      </LeftSection>
      <RightSection run={run}>
        <RightText>현재까지 진행했던 프로젝트입니다</RightText>{" "}
      </RightSection>
    </SectionContainer>
  );
}

const SectionContainer = styled.div`
  ${tw`min-h-[100vh] flex`}
  height:calc(100vh + 200px);

  @media screen and (max-width: 800px) {
    ${tw`flex flex-col-reverse items-center`}
  }
`;

const LeftSection = styled.div`
  ${tw`h-full w-[60%] flex pl-8 items-center`}

  @media screen and (max-width: 800px) {
    ${tw`h-[80%] flex-col`}
  }

  animation-name: Cupimg;
  animation-duration: 1s;
  animation-delay: 0s;
  animation-play-state: ${(props) => props.run};

  @keyframes Cupimg {
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

const ParentMonitor = styled.img`
  ${tw`relative min-w-[480px] max-h-[360px] w-[60%] z-10`}

  @media screen and (max-width: 800px) {
    ${tw`min-w-[240px] max-w-[240px] max-h-[180px] mr-[160px]`}
  }
`;

const ChildMonitor = styled.img`
  ${tw`absolute min-w-[455px] max-w-[455px] h-[260px] mb-[72px] ml-[14px]`}

  @media screen and (max-width: 800px) {
    ${tw`min-w-[230px] max-w-[230px] min-h-[135px] max-h-[135px] ml-1 mt-1 mr-[160px]`}
  }
`;

const ParentIphone = styled.img`
  ${tw`absolute w-40 z-10`}
  transform: translateX(300%);

  @media screen and (max-width: 800px) {
    ${tw`absolute w-24 z-10 mr-[160px]`}
    transform: translate(180%,20%);
  }
`;

const ChildIphone = styled.img`
  ${tw`absolute w-28 h-56 ml-6 rounded-xl mr-[160px]`}
  transform: translateX(430%);

  @media screen and (max-width: 800px) {
    ${tw`absolute w-[64px] h-[135px] rounded-lg`}
    transform: translate(250%,25%);
  }
`;

const ProjectIntroduce = styled.div`
  ${tw`absolute font-mmf w-[34vw] text-center `}
  transform : translateY(220px);

  @media screen and (max-width: 800px) {
    ${tw`w-full mr-[80px]`}
  }
`;

const ProjectOverview = styled.div`
  ${tw`text-xl`}
`;

const ProjectName = styled.div`
  ${tw`text-3xl font-bold`}
`;

const RadioButtonBox = styled.div`
  ${tw`absolute w-[34vw] flex justify-center`}
  transform : translateY(320px);

  @media screen and (max-width: 800px) {
    ${tw`w-full mr-[80px]`}
  }
`;

const SelectButton = styled.button`
  ${tw`w-12 border ml-4 h-12 rounded-xl min-w-[40px]`}

  ${(props) => (props.num === props.idx ? tw`bg-my-blue text-white` : null)}
`;

const RightSection = styled.div`
  ${tw`h-full w-[40%] flex items-center justify-center text-5xl flex `}

  animation-name : Cuptext;
  animation-duration: 1.5s;
  animation-delay: 0s;
  animation-play-state: ${(props) => props.run};

  @media screen and (max-width: 800px) {
    ${tw`m-14 w-full h-[20%]`}
  }

  @keyframes Cuptext {
    0% {
      opacity: 0;
      transform: translateY(20%);
    }
    30% {
      opacity: 0;
      transform: translateY(10%);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
`;

const RightText = styled.div`
  ${tw`text-5xl w-[70%] font-bold break-keep flex text-right`}

  @media screen and (max-width: 800px) {
    ${tw`text-3xl`}
  }
  line-height: 80px;
`;
