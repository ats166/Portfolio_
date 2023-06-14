import React from "react";
import tw, { styled } from "twin.macro";

export default function FunctionDetailList(props) {
  // 기획배경 및 서비스소개(사진)

  return (
    <Container idid={props.idid} isIdIncluded={props.isIdIncluded}>
      - {props.data}
    </Container>
  );
}

const Container = styled.div`
  ${tw`my-2`}
  ${(props) =>
    props.isIdIncluded ? tw`text-my-blue font-bold` : tw`text-black`}
`;
