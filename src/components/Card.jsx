import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addQuestions, showAns } from "../Store/QuestionSlice";

const Card = () => {
  const questions = useSelector((state) => state.questions.value);
  const curr = useSelector((state) => state.questions.currentQs);
  const showAnswer = useSelector((state) => state.questions.showAnswer);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    questionHandler();
  }, []);

  useEffect(() => {
    console.log("questions", questions); // This will log the questions after they are updated
  }, [questions]);

  const questionHandler = async () => {
    try {
      const data = await fetch(
        "https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=boolean"
      );
      const json = await data.json();
      const { results } = json;

      dispatch(addQuestions(results));
    } catch (err) {
      setError("No Questions available at this moment...try again after sometime");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="flex flex-col items-center gap-5 h-[30rem] w-[18rem] bg-black mt-[8rem] rounded-t-lg shadow-black shadow-md">
      <h1 className="text-3xl text-white bg-blue-400 w-full text-center font-extrabold rounded-lg">
        TRUE OR FALSE
      </h1>
      <h1 className="font-mono text-xl text-white">
        {"<"}-- Question --{">"}
      </h1>
      <div className="flex items-center w-full justify-center p-4">
        {questions.length > 0 ? (
          <p
            className={`break-words text-center overflow-x-auto text-2xl font-semibold ${
              showAnswer ? "text-green-500" : "text-white"
            }`}
          >
            {showAnswer ? curr.correct_answer : curr.question}
          </p>
        ) : (
          <p className="break-words text-center overflow-x-auto text-2xl font-semibold text-white">
            No question available at this moment
          </p>
        )}
      </div>
      <button
        className="text-3xl text-white rounded-b-lg bg-red-400 w-[18rem] text-center absolute top-[40rem] font-extrabold"
        onClick={() => dispatch(showAns())}
      >
        CLICK TO FLIP
      </button>
    </div>
  );
};

export default Card;
