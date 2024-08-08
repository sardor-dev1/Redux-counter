import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Tooltip, Button } from "@mui/material";
import Modal from "@mui/material/Modal";
import { useDispatch, useSelector } from "react-redux";
import { reset } from "../../CounterSlice";

const style = (theme) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "#6B7280",
  boxShadow: 24,
  p: 4,
  borderRadius: "5px",
});

export default function BasicModal({ open, handleClose }) {
  const dispatch = useDispatch();
  const handleReset = () => {
    dispatch(reset());
    handleClose();
  };
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            sx={{ textAlign: "center", fontWeight: "bold" }}
            id="modal-modal-title"
            variant="h5"
            component="h2"
          >
            Reset Counter?
          </Typography>
          <div className="flex justify-center py-[30px] gap-14">
            <Tooltip title="Yes" arrow>
              <button
                className="text-[24px] font-semibold border-solid border-transparent hover:border-black border-[2px] rounded-md px-3 "
                onClick={handleReset}
              >
                yes
              </button>
            </Tooltip>
            <Tooltip title="Close" arrow>
              <button
                className="text-[24px] font-semibold border-solid border-transparent hover:border-black border-[2px] rounded-md px-3 "
                onClick={handleClose}
              >
                close
              </button>
            </Tooltip>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
