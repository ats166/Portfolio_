import React from "react";
import { useNavigate } from "react-router-dom";

export default function NotFoundPage() {
  const navigate = useNavigate();

  const back = () => {
    navigate(-1);
  };
  return (
    <div>
      <button onClick={back}>뒤로가기</button>
    </div>
  );
}
