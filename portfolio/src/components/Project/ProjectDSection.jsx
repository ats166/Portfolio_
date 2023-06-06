import React from "react";
import tw, { styled } from "twin.macro";

export default function ProjectDSection(props) {
  console.log("D", props.data);
  return (
    <Container>
      <ContentContainer>
        <RetrospectSection>프로젝트 회고</RetrospectSection>
        {props.data.othername.map((item, idx) => (
          <div key={idx}>
            <RetrospectTitle>{item}</RetrospectTitle>
            <RetrospectContent>
              {props.data.othercontent[idx]}
            </RetrospectContent>
          </div>
        ))}
      </ContentContainer>
      <BackGround />
    </Container>
  );
}

const Container = styled.div`
  ${tw`relative w-full flex font-intro h-full pb-20`}
`;

const ContentContainer = styled.div`
  ${tw`w-[1152px] mx-auto z-10`}
`;

const RetrospectSection = styled.div`
  ${tw`mt-[4%] text-8xl text-center text-white`}
`;

const RetrospectTitle = styled.div`
  ${tw`text-4xl mt-[5%] font-bold text-white`}
`;

const RetrospectContent = styled.div`
  $${tw`pl-[5%] pt-[4%] border text-xl font-bold`}
  white-space: pre-line;
  line-height:40px;
`;

const BackGround = styled.div`
  ${tw`absolute inset-0 w-full h-full z-0 bg-my-blue`}
`;
