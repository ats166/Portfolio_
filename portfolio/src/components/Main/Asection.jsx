import React from "react";
import tw, { styled } from "twin.macro";

export default function Asection() {
  return <SectionContainer>사진, 이름, 소개</SectionContainer>;
}

const SectionContainer = styled.div`
  ${tw`h-screen`}
`;
