import { configureStore } from "@reduxjs/toolkit";
import questionReducer from "./QuestionSlice";
import flashcardReducer from "./FlashcardSlice";

export default configureStore({
  reducer: {
    questions: questionReducer,
    flashcards: flashcardReducer,
  },
});
