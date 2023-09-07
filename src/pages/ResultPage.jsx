import { resultData } from "../constants/resultData";
import { useParams, Link } from "react-router-dom";
import React from "react";

const ResultPage = () => {
  const { mbti } = useParams();

  const resultMBTI = resultData.find((result) => result.mbti === mbti);

  // resultMBTI의 설명으로부터 \n 를 기준으로 배열을 만듭니다.
  const resultDesc = resultMBTI.desc.split("\n");

  return (
    <div className="layout">
      <p className="title-light">나에게 맞는 고양이는</p>
      <p className="title-bold">
        {resultMBTI.name} ({resultMBTI.mbti})
      </p>
      <img className="title-img" src={resultMBTI.image} />

      {resultDesc.map((desc, index) => (
        <p key={index} className="text-result">
          {desc}
        </p>
      ))}
      <Link to="/" className="square-button">
        다시 해보기
      </Link>
    </div>
  );
};

export default ResultPage;
