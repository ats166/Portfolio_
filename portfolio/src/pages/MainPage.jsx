import React from "react";
import { Link } from "react-router-dom";
import tw, { styled } from "twin.macro";

export default function MainPage() {
  return (
    <Container>
      메인
      <Link to="/">to 인트로</Link>
    </Container>
  );
}

const Container = styled.div`
  ${tw`w-full max-w-[1152px] mx-auto`}
`;
