import { useDispatch } from "react-redux";
import { nextQues, prevQues} from "../Store/QuestionSlice";

const NavBtn = ({dir}) => {
  const dispatch = useDispatch();
  const next = () => {
    if(dir==="<"){
        dispatch(prevQues())
    }
    if(dir===">"){
        dispatch(nextQues())
    }
  }
  return (
    <div className=' flex h-[5rem] w-[4rem] rounded-lg content-center justify-center bg-slate-400 hover:shadow-md'>
      <button className='text-5xl self-center font-semibold ' onClick={() => next(dir)}>{dir}</button>
    </div>
  )
}

export default NavBtn
