import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function IntroPage() {
  const navigate = useNavigate();
  setTimeout(() => {
    console.log("실");
    navigate(`/home`);
  }, 5000);
  return (
    <div>
      잠시 후 메인페이지로 이동합니다
      <Link to="/home">홈으로</Link>
    </div>
  );
}
