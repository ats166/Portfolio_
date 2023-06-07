import React from "react";
import tw, { styled } from "twin.macro";

export default function OtherCards(props) {
  const skill = props.data;
  const time = props.idx / 10;
  const link = `${skill.link}`;
  return (
    <CardContainer time={time}>
      <div>
        <img src={link} alt={skill.name} className="h-24 w-full mb-2" />
        <div className="border-t-2 w-full text-center font-intro font-bold mt-4 border-my-blue">
          {skill.name}
        </div>
      </div>
    </CardContainer>
  );
}
const CardContainer = styled.div`
  ${tw`w-[20%] mx-4 border-2 border-my-blue p-4 rounded-xl hover:opacity-50`}

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
