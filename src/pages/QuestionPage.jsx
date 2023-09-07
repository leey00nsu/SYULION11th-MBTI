import { useState } from "react";
import { questionData } from "../constants/questionData";
import { useNavigate } from "react-router-dom";

const QuestionPage = () => {
  const navigate = useNavigate();
  const [questionNum, setQuestionNum] = useState(0); // 현재 질문의 인덱스
  // 각 항목에 대하여 질문이 3개이며 각 질문은 답변이 A,B로 나뉘어져 있음
  // 답변의 가중치는 A:1, B:0으로 하여 최종 가중치가 2 이상이면 해당 항목의 첫 번째 문자의 유형이 되고 그렇지 않으면 두 번째 문자의 유형이 됨
  // 예시 = EI: 2, SN: 3, TF: 0, JP: 1 => EI: E, SN: S, TF: F, JP: P => ESFP
  const [result, setResult] = useState({
    EI: 0,
    SN: 0,
    TF: 0,
    JP: 0,
  }); // 답변의 가중치를 합산할 객체

  // 답변을 클릭했을 때 실행되는 함수
  // type: 답변의 유형, add: 답변의 가중치
  const clickAnswerHandler = (type, add) => {
    // 답변의 가중치를 합산하고
    const newResult = { ...result, [type]: result[type] + add };
    setResult(newResult);

    // 마지막 질문이라면 mbti를 계산하고 해당 결과 페이지로 이동
    if (questionNum === questionData.length - 1) {
      const mbti = getMBTI();
      navigate(`/result/${mbti}`);
    }
    // 마지막 질문이 아니라면 다음 질문으로 이동
    else {
      setQuestionNum((prev) => prev + 1);
    }
  };

  // 가중치를 계산해서 MBTI 유형을 반환하는 함수
  const getMBTI = () => {
    // 초기 MBTI 유형은 빈 문자열
    let mbti = "";
    // 각 항목에 대하여 가중치가 2 이상이면 첫 번째 문자를, 그렇지 않으면 두 번째 문자를 MBTI 유형에 추가
    if (result.EI >= 2) {
      mbti += "E";
    } else {
      mbti += "I";
    }
    if (result.SN >= 2) {
      mbti += "S";
    } else {
      mbti += "N";
    }
    if (result.TF >= 2) {
      mbti += "T";
    } else {
      mbti += "F";
    }
    if (result.JP >= 2) {
      mbti += "J";
    } else {
      mbti += "P";
    }
    return mbti;
  };

  return (
    <div className="layout">
      <p className="title-light">
        Q {questionNum + 1}/{questionData.length}
      </p>
      <p className="title-bold">{questionData[questionNum].title}</p>
      <button
        className="square-button"
        onClick={() => clickAnswerHandler(questionData[questionNum].type, 1)}
      >
        {questionData[questionNum].answerA}
      </button>
      <button
        className="square-button"
        onClick={() => clickAnswerHandler(questionData[questionNum].type, 0)}
      >
        {questionData[questionNum].answerB}
      </button>
    </div>
  );
};

export default QuestionPage;
