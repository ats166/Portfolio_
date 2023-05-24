import React from "react";
import { Link } from "react-router-dom";
import tw, { styled } from "twin.macro";
import Asection from "../components/Main/Asection";
import Bsection from "../components/Main/Bsection";
import Csection from "../components/Main/Csection";

export default function MainPage() {
  return (
    <Container>
      <Asection />
      <Bsection />
      <Csection />
      메인 (10.다채로운전환) (이미지는 날아다니는새?) 내 사진, ~~하는 프론트엔드
      개발자 김준영입니다. (기술스택 레벨) (사용가능 기술스택)
      <Link to="/">to 인트로</Link>
    </Container>
  );
}

const Container = styled.div`
  ${tw`w-full max-w-[1152px] mx-auto`}
`;
