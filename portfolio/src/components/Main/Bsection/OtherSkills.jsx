import React from "react";
import tw, { styled } from "twin.macro";
import skills from "../../../assets/Skills.json";
import OtherCards from "./OtherCards";

export default function OtherSkills() {
  const skill = skills.Other;
  return (
    <SkillsContainer>
      {" "}
      <div className="flex flex-col justify-evenly h-full">
        {skill.map((data, idx) => (
          <OtherCards data={data} idx={idx} />
        ))}
      </div>
    </SkillsContainer>
  );
}

const SkillsContainer = styled.div`
  ${tw`h-[85%] bg-gray-100`};
`;
