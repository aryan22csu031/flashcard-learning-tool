import { useState } from "react";
import { useDispatch } from "react-redux";
import { addFlashcard } from "../Store/FlashcardSlice";

const FlashcardForm = () => {
  const dispatch = useDispatch();
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addFlashcard({ question, answer }));
    setQuestion("");
    setAnswer("");
  };

  return (
    <div className="flex w-full h-full items-center justify-center">
    <div className="flex flex-col items-center justify-around w-[25rem] h-[25rem] bg-pink-600 rounded-lg">
        <h1 className="text-3xl font-extrabold">ADD NEW FLASHCARD</h1>
    <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
      <input
        type="text"
        placeholder="Question"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        className="p-2 border border-gray-400 rounded"
      />
      <input
        type="text"
        placeholder="Answer"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        className="p-2 border border-gray-400 rounded"
      />
      <button type="submit" className="p-2 bg-blue-500 text-white rounded">
        Add Flashcard
      </button>
    </form>
    </div>
    </div>
  );
};

export default FlashcardForm;
