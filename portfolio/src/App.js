import React from "react";
import { styled } from "twin.macro";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <Wrap>
      <Navbar />
      <Outlet />
    </Wrap>
  );
}

export default App;

const Wrap = styled.div`
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    height: 30%;
    background: #217af4;

    border-radius: 10px;
  }

  ::-webkit-scrollbar-track {
    background: rgba(33, 122, 244, 0.1);
  }
`;
