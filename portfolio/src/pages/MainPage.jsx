import React from "react";
import { Link } from "react-router-dom";
import tw, { styled } from "twin.macro";
import Asection from "../components/Main/Asection";
import Bsection from "../components/Main/Bsection";
import Csection from "../components/Main/Csection";
import Footer from "../components/Footer.jsx";

export default function MainPage() {
  return (
    <>
      <Container>
        <Asection />
        <Bsection />
        <Csection />
        <Link to="/">to 인트로</Link>
      </Container>
      <Footer />
    </>
  );
}

const Container = styled.div`
  ${tw`w-full max-w-[1152px] mx-auto`}
`;
