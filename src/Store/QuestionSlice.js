import { createSlice } from "@reduxjs/toolkit";

const questionSlice = createSlice({
  name: "questions",
  initialState: {
    value: [],
    currentQuestion: 0,
    currentQs: "",
    showAnswer: false,
  },
  reducers: {
    addQuestions: (state, action) => {
      state.value = action.payload;
      state.currentQs = state.value[state.currentQuestion];
      state.showAnswer = false;
    },
    nextQues: (state) => {
      if (state.currentQuestion >= state.value.length - 1) {
        state.currentQuestion = 0;
      } else {
        state.currentQuestion += 1;
      }
      state.currentQs = state.value[state.currentQuestion];
      state.showAnswer = false;
    },
    prevQues: (state) => {
      if (state.currentQuestion <= 0) {
        state.currentQuestion = state.value.length - 1;
      } else {
        state.currentQuestion -= 1;
      }
      state.currentQs = state.value[state.currentQuestion];
      state.showAnswer = false;
    },
    showAns: (state) => {
      state.showAnswer = !state.showAnswer;
    },
  },
});

export const { addQuestions, nextQues, prevQues, showAns } = questionSlice.actions;
export default questionSlice.reducer;
