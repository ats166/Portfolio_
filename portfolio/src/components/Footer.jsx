import React from "react";
import tw, { styled } from "twin.macro";

export default function Footer(props) {
  return (
    <Container>
      <Section>
        본페이지는 웹페이지에 최적화 되어있습니다
        <div className="h-[100%] mt-16 text-right">
          Last Update. 2023. 06. 07
        </div>
      </Section>
    </Container>
  );
}

const Container = styled.div`
  ${tw`w-full border bg-gray-100 h-[15vh]`}
`;

const Section = styled.div`
  ${tw`max-w-[1152px] mx-auto my-4`}
`;
