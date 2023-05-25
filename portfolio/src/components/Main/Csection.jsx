import React from "react";
import tw, { styled } from "twin.macro";

export default function Csection() {
  return (
    <SectionContainer>
      <LeftSection></LeftSection>
      <RightSection>제가 진행했던 프로젝트들입니다.</RightSection>
    </SectionContainer>
  );
}

const SectionContainer = styled.div`
  ${tw`h-screen flex`}
`;

const LeftSection = styled.div`
  ${tw`h-full w-[60%] border`}
`;

const RightSection = styled.div`
  ${tw`h-full w-[40%] flex items-center justify-center`}
`;
