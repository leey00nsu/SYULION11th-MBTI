import { Link } from "react-router-dom";
import React from "react";

const MainPage = () => {
  return (
    <div>
      <h1>내 MBTI와 맞는 고양이 알아보기</h1>
      <Link to="/question">
        <button>시작하기</button>
      </Link>
    </div>
  );
};

export default MainPage;
