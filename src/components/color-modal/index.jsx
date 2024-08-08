import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { useDispatch } from "react-redux";
import { changeColor } from "../../ColorSlice";

const colors = [
  "bg-black",
  "bg-red-500",
  "bg-green-500",
  "bg-blue-500",
  "bg-yellow-500",
  "bg-purple-500",
  "bg-pink-500",
  "bg-indigo-500",
  "bg-teal-500",
  "bg-orange-500",
  "bg-gray-500",
];

const ColorModal = ({ open, handleClose }) => {
  const dispatch = useDispatch();

  const handleColorChange = (color) => {
    dispatch(changeColor(color));
    handleClose();
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white p-4 rounded-md outline-none">
        <h2 className="text-center text-2xl mb-4">Choose a background color</h2>
        <div className="flex flex-wrap gap-2 justify-center">
          {colors.map((color) => (
            <button
              key={color}
              className={`w-[50px] h-[50px] ${color} rounded-full cursor-pointer`}
              onClick={() => handleColorChange(color)}
            />
          ))}
        </div>
      </Box>
    </Modal>
  );
};

export default ColorModal;
