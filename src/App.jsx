
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "./CounterSlice";
import BasicModal from "./components/reset-modal";
import Tooltip from "@mui/material/Tooltip";
import { useState } from "react";
import ColorModal from "./components/color-modal"; 

const App = () => {
  const count = useSelector((store) => store.counter.count);
  const bgColor = useSelector((store) => store.color.bgColor); 
  const dispatch = useDispatch();
  const [openReset, setOpenReset] = useState(false);
  const [openColor, setOpenColor] = useState(false);
  const handleCloseReset = () => setOpenReset(false);
  const handleCloseColor = () => setOpenColor(false);

  return (
    <div className={`relative text-gray-300 h-[100vh] ${bgColor}`}>
      <h1 className="pt-[30vh] text-center text-[150px]">{count}</h1>
      <BasicModal open={openReset} handleClose={handleCloseReset} />
      <ColorModal open={openColor} handleClose={handleCloseColor} />
      <Tooltip title="Add" placement="top-start">
        <button
          className="absolute top-[50%] right-[30px] max-w-450:bottom-[50px] max-w-450:top-auto flex items-center justify-center cursor-pointer border-solid border-[2px] border-gray-500 w-[50px] h-[50px] rounded-full text-[50px] font-bold"
          onClick={() => dispatch(increment(1))}
        >
          <span className="absolute top-[-40%]">+</span>
        </button>
      </Tooltip>
      <Tooltip title="Subtraction" placement="top-start">
        <button
          className={
            count === 0
              ? "hidden max-w-450:bottom-[50px] max-w-450:top-auto absolute top-[50%] left-[30px]  flex items-center justify-center cursor-pointer border-solid border-[2px] border-gray-500 w-[50px] h-[50px] rounded-full text-[50px] font-bold"
              : "max-w-450:bottom-[50px] max-w-450:top-auto absolute top-[50%] left-[30px]  flex items-center justify-center cursor-pointer border-solid border-[2px] border-gray-500 w-[50px] h-[50px] rounded-full text-[50px] font-bold"
          }
          onClick={() => dispatch(decrement())}
        >
          <span className="absolute top-[-40%]">-</span>
        </button>
      </Tooltip>

      <Tooltip title="Reset" placement="top-start">
        <button
          className="absolute top-11 right-[50%] cursor-pointer w-[50px] h-[50px] text-[30px] font-semibold transform hover:scale-150 transition duration-100"
          onClick={() => setOpenReset(true)}
        >
          ↺
        </button>
      </Tooltip>

      <Tooltip title="Settings" placement="top-start">
        <button
          className="absolute top-11 left-[50%] cursor-pointer w-[50px] h-[50px] text-[30px] font-semibold transform hover:scale-150 transition duration-100"
          onClick={() => setOpenColor(true)}
        >
          ⚙️
        </button>
      </Tooltip>
    </div>
  );
};

export default App;
