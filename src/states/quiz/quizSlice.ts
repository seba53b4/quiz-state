import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface QuestionState {
  questionNumber: number;
  questionAnswer: number | null;
}

export interface QuizState {
  questionState: QuestionState[];
  questionQuizNumber: number;
  questionMaxNumber: number;
  isLoading: boolean; // <-- Añadir isLoading
}

const initialState: QuizState = {
  questionState: [],
  questionQuizNumber: 1,
  questionMaxNumber: 0,
  isLoading: false, // <-- Estado inicial para isLoading
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
      state.questionMaxNumber = 0;
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
    setQuestionMaxNumber: (state, action: PayloadAction<number>) => {
      state.questionMaxNumber = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(startQuiz.pending, (state) => {
        state.isLoading = true; // <-- Indicar que está cargando
      })
      .addCase(startQuiz.fulfilled, (state) => {
        state.isLoading = false; // <-- Indicar que ha terminado de cargar
      })
      .addCase(startQuiz.rejected, (state) => {
        state.isLoading = false; // <-- En caso de error, dejar de cargar
      });
  },
});

export const startQuiz = createAsyncThunk("quiz/startQuiz", async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
});

export const {
  addQuestionState,
  answerQuestion,
  resetQuiz,
  nextQuestion,
  previousQuestion,
  setQuestionMaxNumber,
} = quizSlice.actions;

export default quizSlice.reducer;
