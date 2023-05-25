import React from "react";
import tw, { styled } from "twin.macro";

export default function Footer() {
  return (
    <Container>
      {" "}
      현재 페이지는 공사중입니다. 최대한 빠른 시일 내에 작업하겠습니다
    </Container>
  );
}

const Container = styled.div`
  ${tw`w-full h-[15vh]`}
`;
