import { resultData } from "../assets/data/resultData";
import { useParams } from "react-router-dom";
import React from "react";

const ResultPage = () => {
  const { mbti } = useParams();

  const resultMBTI = resultData.find((result) => result.mbti === mbti);
  return (
    <div>
      <h1>결과</h1>
      <img src={resultMBTI.image} />
      <h2>{resultMBTI.mbti}</h2>
      <h2>{resultMBTI.name}</h2>
      <p>{resultMBTI.desc}</p>
    </div>
  );
};

export default ResultPage;
