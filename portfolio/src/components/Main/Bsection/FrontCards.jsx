import React from "react";
import tw, { styled } from "twin.macro";

export default function FrontCards(props) {
  const skill = props.data;
  const time = props.idx / 10;
  return (
    <CardContainer time={time} run={props.run}>
      {skill.name}
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
