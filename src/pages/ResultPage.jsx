import { resultData } from "../constants/resultData";
import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";

const ResultPage = () => {
  const { mbti } = useParams();

  const resultMBTI = resultData.find((result) => result.mbti === mbti);

  // resultMBTI의 설명으로부터 \n 를 기준으로 배열을 만듭니다.
  const resultDesc = resultMBTI.desc.split("\n");

  // 카카오 API 초기화
  useEffect(() => {
    Kakao.init("892aa57f49e10b694c9ae263e259c40f");
    Kakao.isInitialized();
  }, []);

  const shareKaKao = () => {
    Kakao.Share.sendCustom({
      templateId: 98191,
      templateArgs: {
        THU: resultMBTI.image,
        MATCH_CAT: resultMBTI.name,
      },
    });
  };

  return (
    <div className="layout">
      <p className="title-light">나와 어울리는 고양이는</p>
      <p className="title-bold">
        {resultMBTI.name} ({resultMBTI.mbti})
      </p>
      <img className="title-img" src={resultMBTI.image} />

      {resultDesc.map((desc, index) => (
        <p key={index} className="text-result">
          {desc}
        </p>
      ))}

      <button onClick={shareKaKao} className="square-button">
        카카오톡 공유하기
      </button>
      <Link to="/" className="square-button">
        다시 해보기
      </Link>
    </div>
  );
};

export default ResultPage;
