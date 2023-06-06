import React from "react";
import tw, { styled } from "twin.macro";

export default function ProjectBSection(props) {
  return (
    <Container>
      <ContentContainer>
        <PlanningSection>서비스 소개</PlanningSection>
        <PlanningBox>{props.data}</PlanningBox>
        <ContentImgSection></ContentImgSection>
      </ContentContainer>
      <BackGround />
    </Container>
  );
}

const Container = styled.div`
  ${tw`relative w-full flex font-intro h-[125vh]`}
`;

const ContentContainer = styled.div`
  ${tw`w-[1152px] mx-auto z-10`}
`;

const PlanningSection = styled.div`
  ${tw`mt-[4%] ml-[5%] mb-[2%] text-6xl max-h-[10%]`}
`;

const PlanningBox = styled.div`
  ${tw`text-2xl max-h-[20%]`}
  white-space: pre-line;
  line-height: 50px;
`;

const BackGround = styled.div`
  ${tw`absolute inset-0 w-full h-[125vh] z-0 bg-gray-200`}
`;

const ContentImgSection = styled.div`
  ${tw`border border-black h-[80%]`}
`;
