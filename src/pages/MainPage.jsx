import React from "react";
import { Link } from "react-router-dom";
import MainTitle from "../components/main/MainTitle";

const MainPage = () => {
  return (
    <div className="layout">
      <MainTitle />
      <Link to="/question" className="square-button">
        시작하기
      </Link>
    </div>
  );
};

export default MainPage;
