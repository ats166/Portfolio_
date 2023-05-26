import React from "react";
import tw, { styled } from "twin.macro";
import Construction from "../components/Construction";

export default function DetailPage() {
  return (
    <Container>
      <Construction />
    </Container>
  );
}

const Container = styled.div`
  ${tw`max-w-[1152px] mx-auto`}
`;
