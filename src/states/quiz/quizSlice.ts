import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface QuestionState {
  questionNumber: number;
  questionAnswer: number | null;
}

export interface QuizState {
  questionState: QuestionState[];
  questionQuizNumber: number;
  questionMaxNumber: number;
}

const initialState: QuizState = {
  questionState: [],
  questionQuizNumber: 1,
  questionMaxNumber: 4,
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    addQuestionState: (state, action: PayloadAction<QuestionState>) => {
      state.questionState.push(action.payload);
    },
    answerQuestion: (
      state,
      action: PayloadAction<{ questionNumber: number; questionAnswer: number }>
    ) => {
      const { questionNumber, questionAnswer } = action.payload;
      const existingQuestion = state.questionState.find(
        (q) => q.questionNumber === questionNumber
      );
      if (existingQuestion) {
        existingQuestion.questionAnswer = questionAnswer;
      } else {
        state.questionState.push({ questionNumber, questionAnswer });
      }
    },
    resetQuiz: (state) => {
      state.questionState = [];
      state.questionQuizNumber = 1;
    },
    nextQuestion: (state) => {
      if (state.questionQuizNumber < state.questionMaxNumber) {
        state.questionQuizNumber += 1;
      }
    },
    previousQuestion: (state) => {
      if (state.questionQuizNumber > 1) {
        state.questionQuizNumber -= 1;
      }
    },
  },
});

export const {
  addQuestionState,
  answerQuestion,
  resetQuiz,
  nextQuestion,
  previousQuestion,
} = quizSlice.actions;

export default quizSlice.reducer;
