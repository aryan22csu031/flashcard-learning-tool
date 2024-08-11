import { createSlice } from "@reduxjs/toolkit";

const flashcardSlice = createSlice({
  name: "flashcards",
  initialState: {
    value: [],
  },
  reducers: {
    addFlashcard: (state, action) => {
      state.value.push(action.payload);
    },
    updateFlashcard: (state, action) => {
      const { index, question, answer } = action.payload;
      state.value[index] = { question, answer };
    },
    deleteFlashcard: (state, action) => {
      state.value.splice(action.payload, 1);
    },
  },
});

export const { addFlashcard, updateFlashcard, deleteFlashcard } = flashcardSlice.actions;
export default flashcardSlice.reducer;
