import QuestionPage from "./pages/QuestionPage";
import MainPage from "./pages/MainPage";
import ResultPage from "./pages/ResultPage";
import { Routes, Route } from "react-router-dom";
import React from "react";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/question" element={<QuestionPage />} />
      <Route path="/result/:mbti" element={<ResultPage />} />
    </Routes>
  );
};

export default App;
