import React from "react";
import tw, { styled } from "twin.macro";
import skills from "../../../assets/Skills.json";

import FrontCards from "./FrontCards";

export default function FrontSKills() {
  const skill = skills.Front;

  console.log(skill);
  return (
    <SkillsContainer>
      <div className="flex flex-col justify-evenly h-full">
        {skill.map((data, idx) => (
          <FrontCards data={data} idx={idx} />
        ))}
      </div>
    </SkillsContainer>
  );
}

const SkillsContainer = styled.div`
  ${tw`h-[85%] bg-my-blue text-white`};
`;
