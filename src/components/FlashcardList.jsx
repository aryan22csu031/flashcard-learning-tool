import { useSelector, useDispatch } from "react-redux";
import { deleteFlashcard, updateFlashcard } from "../Store/FlashcardSlice";
import { useState } from "react";

const FlashcardList = () => {
  const flashcards = useSelector((state) => state.flashcards.value);
  const dispatch = useDispatch();
  const [editIndex, setEditIndex] = useState(null);
  const [editQuestion, setEditQuestion] = useState("");
  const [editAnswer, setEditAnswer] = useState("");

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditQuestion(flashcards[index].question);
    setEditAnswer(flashcards[index].answer);
  };

  const handleSave = (index) => {
    dispatch(
      updateFlashcard({ index, question: editQuestion, answer: editAnswer })
    );
    setEditIndex(null);
  };

  return (
    <div className="flex p-2 flex-wrap items-center gap-4">
      {flashcards.map((flashcard, index) => (
        <div key={index} className="flex gap-4">
          {editIndex === index ? (
            <>
              <input
                type="text"
                value={editQuestion}
                onChange={(e) => setEditQuestion(e.target.value)}
                className="p-2 border border-gray-400 rounded"
              />
              <input
                type="text"
                value={editAnswer}
                onChange={(e) => setEditAnswer(e.target.value)}
                className="p-2 border border-gray-400 rounded"
              />
              <button
                onClick={() => handleSave(index)}
                className="p-2 bg-green-500 text-white rounded"
              >
                Save
              </button>
            </>
          ) : (
            <div className="flex gap-2 border border-blue-600 p-2">
              <p className="border border-black text-center p-2">
                {flashcard.question}
              </p>
              <p className="border border-black text-center p-2">{flashcard.answer}</p>
              <button
                onClick={() => handleEdit(index)}
                className="p-2 bg-yellow-500 text-white rounded"
              >
                Edit
              </button>
              <button
                onClick={() => dispatch(deleteFlashcard(index))}
                className="p-2 bg-red-500 text-white rounded"
              >
                Delete
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FlashcardList;
