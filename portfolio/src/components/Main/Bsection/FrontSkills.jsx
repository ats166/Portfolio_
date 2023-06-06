import React from "react";
import tw, { styled } from "twin.macro";
import skills from "../../../assets/Skills.json";

import FrontCards from "./FrontCards";

export default function FrontSKills(props) {
  const skill = skills.Front;

  return (
    <SkillsContainer>
      <div className="flex flex-col justify-evenly h-full">
        {skill.map((data, idx) => (
          <>
            <FrontCards
              data={data}
              key={data.id}
              idx={idx}
              run={props.run}
            ></FrontCards>
          </>
        ))}
      </div>
    </SkillsContainer>
  );
}

const SkillsContainer = styled.div`
  ${tw`h-[85%] bg-my-blue text-white`};
`;
