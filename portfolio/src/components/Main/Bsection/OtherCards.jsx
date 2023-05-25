import React from "react";
import tw, { styled } from "twin.macro";

export default function OtherCards(props) {
  const skill = props.data;
  const time = props.idx / 10;
  return (
    <CardContainer time={time}>
      {skill.name} {skill.value} {skill.overview}
    </CardContainer>
  );
}
const CardContainer = styled.div`
  ${tw`border`}

  animation-name : upcard;
  animation-delay: ${(props) => props.time}s;
  animation-duration: 1s;
  animation-fill-mode: both;

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
