import React, { Suspense, useState } from "react";
import { Quiz } from "../components/quiz-component/QuizComponent";
import { useDispatch, useSelector } from "react-redux";
import {
  QuizState,
  setQuestionMaxNumber,
  startQuiz,
} from "../states/quiz/quizSlice";
import { AppDispatch, RootState } from "../states/store";

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
  const dispatch = useDispatch<AppDispatch>();
  const { questionQuizNumber, isLoading } = useSelector(
    (state: RootState) => state.quiz
  );

  //   useEffect(() => {
  //     // Suponiendo que tienes una función para obtener las preguntas
  //     const fetchQuestions = async () => {
  //       const questions = await getQuestions(); // Ejemplo de función que obtiene las preguntas
  //       dispatch(setQuestionMaxNumber(questions.length)); // Actualiza el número máximo de preguntas
  //     };
  //     fetchQuestions();
  //   }, [dispatch]);

  React.useEffect(() => {
    dispatch(startQuiz());
    dispatch(setQuestionMaxNumber(quizData.length));
  }, []);

  return (
    <div className="quiz-page">
      {isLoading ? (
        <Loading />
      ) : (
        <Quiz
          title={quizData[questionQuizNumber - 1].title}
          options={quizData[questionQuizNumber - 1].options}
          question={quizData[questionQuizNumber - 1].question}
        />
      )}
    </div>
  );
};

const Loading: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-blue-500"></div>
    </div>
  );
};

export default QuizPage;
