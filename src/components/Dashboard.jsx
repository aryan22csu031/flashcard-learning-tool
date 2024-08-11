import { Link } from "react-router-dom"
import FlashcardForm from "./FlashcardForm"
import FlashcardList from "./FlashcardList"

const Dashboard = () => {
  return (
    <>
    <Link to={'/'}><h1 className="m-3 font-mono text-blue-600 hover:underline">{"<-- "}back to home page</h1></Link>
    <div className="flex flex-col gap-[5rem] mt-[10rem]">
        <FlashcardForm/>
        <FlashcardList/>
    </div>
    </>
  )
}

export default Dashboard
