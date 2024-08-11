import React, { useState } from "react";
import { Quiz } from "../components/quiz-component/QuizComponent";
import { useDispatch, useSelector } from "react-redux";
import { QuizState } from "../states/quiz/quizSlice";
import { RootState } from "../states/store";

export const quizData = [
  {
    title: "Cultura General - Pregunta 1",
    question: "¿Cuál es el país más grande del mundo por superficie?",
    options: [
      "Rusia", // Correcta
      "Canadá",
      "China",
    ],
    //correctAnswer: "Rusia"
  },
  {
    title: "Cultura General - Pregunta 2",
    question: "¿Cuál es el río más largo del mundo?",
    options: [
      "Amazonas", // Correcta
      "Nilo",
      "Misisipi",
    ],
    //correctAnswer: "Amazonas"
  },
  {
    title: "Cultura General - Pregunta 3",
    question: "¿En qué año comenzó la Segunda Guerra Mundial?",
    options: [
      "1939", // Correcta
      "1941",
      "1935",
    ],
    // correctAnswer: "1939"
  },
  {
    title: "Cultura General - Pregunta 4",
    question:
      "¿Cuál es el elemento químico más abundante en la atmósfera terrestre?",
    options: [
      "Nitrógeno", // Correcta
      "Oxígeno",
      "Carbono",
    ],
    // correctAnswer: "Nitrógeno"
  },
];
const QuizPage = () => {
  const { questionQuizNumber } = useSelector((state: RootState) => state.quiz);

  return (
    <div className="quiz-page">
      <Quiz
        title={quizData[questionQuizNumber - 1].title}
        options={quizData[questionQuizNumber - 1].options}
        question={quizData[questionQuizNumber - 1].question}
      />
    </div>
  );
};

export default QuizPage;
