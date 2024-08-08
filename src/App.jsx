import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "./CounterSlice";
import BasicModal from "./components/reset-modal";
import Tooltip from "@mui/material/Tooltip";
import { useState } from "react";

const App = () => {
  const count = useSelector((store) => store.counter.count);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  return (
    <div className="bg-black relative text-gray-300 h-[100vh]">
      <h1 className="pt-[30vh] text-center text-[150px]">{count}</h1>
      <BasicModal open={open} handleClose={handleClose} />
      <Tooltip title="Add" placement="top-start">
        <button
          className="absolute top-[50%] right-[30px] flex items-center justify-center cursor-pointer border-solid border-[2px] border-gray-500 w-[50px] h-[50px] rounded-full text-[50px] font-bold"
          onClick={() => dispatch(increment(1))}
        >
          <span className="absolute top-[-40%]">+</span>
        </button>
      </Tooltip>
      <Tooltip title="Subtraction" placement="top-start">
        <button
          className={
            count == 0
              ? "hidden absolute top-[50%] left-[30px]  flex items-center justify-center cursor-pointer border-solid border-[2px] border-gray-500 w-[50px] h-[50px] rounded-full text-[50px] font-bold"
              : "absolute top-[50%] left-[30px]  flex items-center justify-center cursor-pointer border-solid border-[2px] border-gray-500 w-[50px] h-[50px] rounded-full text-[50px] font-bold"
          }
          onClick={() => dispatch(decrement())}
        >
          <span className="absolute top-[-40%]">-</span>
        </button>
      </Tooltip>

      <Tooltip title="Reset" placement="top-start">
        <button
          className="absolute top-11 right-[50%] cursor-pointer w-[50px] h-[50px] text-[30px] font-semibold w-[50"
          onClick={() => setOpen(true)}
        >
          ↺
        </button>
      </Tooltip>
    </div>
  );
};

export default App;
