import React from "react";
import tw, { styled } from "twin.macro";

export default function FrontCards(props) {
  const skill = props.data;
  const time = props.idx / 10;
  const link = `${skill.link}`;
  return (
    <CardContainer time={time} run={props.run}>
      <div className="flex items-end">
        <img src={link} alt={link} className="h-10 w-10 mr-4" />
        {skill.name} <span className="text-xs ml-2">{skill.level}</span>
      </div>
      <ProgressBox>
        <ProgressBar barvalue={skill.value} time={time} run={props.run} />
      </ProgressBox>
      {skill.overview.map((item, idx) => (
        <SkillContent key={idx}>- {item}</SkillContent>
      ))}
    </CardContainer>
  );
}

const CardContainer = styled.div`
  ${tw`w-[80%] mx-auto`}

  animation-name : upcard;
  animation-delay: ${(props) => props.time}s;
  animation-duration: 1s;
  animation-fill-mode: both;
  animation-play-state: ${(props) => props.run};

  @keyframes upcard {
    0% {
      opacity: 0;
      transform: translateY(30%);
    },
    100% {
      opacity: 1;
      transform: translateY(0%);
    },
  }
`;

const ProgressBox = styled.div`
  ${tw`w-[80%] h-[12%] mt-5 border rounded-full relative overflow-hidden`}
`;

const ProgressBar = styled.div`
  ${tw`absolute rounded-full h-[100%] bg-white`}
  transform: translateX(-15%);
  width: ${(props) => props.barvalue + 15}%;

  animation-name: skillprogressbar;
  animation-delay: ${(props) => props.time + 1}s;
  animation-duration: 2s;
  animation-fill-mode: both;
  animation-play-state: ${(props) => props.run};

  @keyframes skillprogressbar {
    0% {
      transform: translateX(-115%);
    }
    ,
    33.3% {
      transform: translateX(0%);
    }
    ,
    66.6% {
      transform: translateX(-25%);
    }
    100% {
      transform: translateX(-15%);
    }
  }
`;

const SkillContent = styled.div`
  ${tw`mx-auto`}
  line-height:40px;
`;
