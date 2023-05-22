import React from "react";
import tw, { styled } from "twin.macro";

export default function Navbar() {
  return <NavContainer>내브바</NavContainer>;
}

const NavContainer = styled.div`
  ${tw`w-full border border-4 border-red-300 h-[42px]`};
  /* border: 1px solid black; */
`;
