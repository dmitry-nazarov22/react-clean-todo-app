import { useState, useEffect } from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import {
  Typography,
  Box,
  Checkbox,
  Button,
  IconButton,
  FormGroup,
  FormControlLabel,
  Modal,
  TextField,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import "./App.css";

function App() {
  let todos = [];
  let dones = [];

  const [open, setOpen] = useState(false);
  const [newTask, setNewTask] = useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setNewTask("");
    setOpen(false);
  };

  const handleAdd = () => {
    if (!newTask.trim()) {
      alert("Please enter a task");
      return;
    }

    // TODO: push to your todos array here
    console.log("Added:", newTask);

    setNewTask("");
    setOpen(false);
  };

  const handleEdit = () => {
    // TODO:
    // - Open modal with text input (old text pasted here), edit, delete and close buttons
    // - After Edit is pressed validate and save input into todos or dones
    // - If validation wasn't succesful or close is pressed – handle
  };

  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "#1e1e1e",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    color: "white",
    borderRadius: "12px",
  };

  return (
    <>
      <div className="wrapper">
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          sx={{ textAlign: "center" }}
        >
          Clean To-Do
        </Typography>

        {/* To Do Section */}
        <section className="to-do-section">
          <Typography variant="h5" component="h2" gutterBottom>
            To Do
          </Typography>
          <div className="to-do-list">
            <FormGroup>
              <div className="list-item">
                <FormControlLabel control={<Checkbox />} label="eat" />
                <IconButton aria-label="edit" sx={{ color: "gray" }}>
                  <EditIcon />
                </IconButton>
              </div>
              <div className="list-item">
                <FormControlLabel control={<Checkbox />} label="sleep" />
                <IconButton aria-label="edit" sx={{ color: "gray" }}>
                  <EditIcon />
                </IconButton>
              </div>
              <div className="list-item">
                <FormControlLabel control={<Checkbox />} label="repeat" />
                <IconButton aria-label="edit" sx={{ color: "gray" }}>
                  <EditIcon />
                </IconButton>
              </div>
            </FormGroup>
          </div>
        </section>
        <section className="done-section">
          <Typography variant="h5" component="h2" gutterBottom>
            Done
          </Typography>
          <div className="done-list">
            <FormGroup>
              <div className="list-item">
                <FormControlLabel
                  control={<Checkbox />}
                  label="make a todo app"
                />
                <IconButton aria-label="edit" sx={{ color: "gray" }}>
                  <EditIcon />
                </IconButton>
              </div>
            </FormGroup>
          </div>
        </section>

        {/* Add Button */}
        <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
          <Button
            onClick={() => handleOpen()}
            variant="outlined"
            startIcon={<AddIcon />}
            sx={{ color: "white", borderColor: "white" }}
          >
            Add new
          </Button>
        </Box>

        {/* Modal */}
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={modalStyle}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Add new task:
            </Typography>

            {/* Input */}
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Enteк task"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              sx={{
                mt: 2,
                input: { color: "white" },
                label: { color: "gray" },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "gray" },
                  "&:hover fieldset": { borderColor: "white" },
                  "&.Mui-focused fieldset": { borderColor: "white" },
                },
              }}
            />
            {/* Buttons */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                gap: 1,
                mt: 3,
              }}
            >
              <Button
                onClick={handleClose}
                variant="outlined"
                sx={{ color: "gray", borderColor: "gray" }}
              >
                Cancel
              </Button>
              <Button
                onClick={handleAdd}
                variant="contained"
                sx={{ bgcolor: "white", color: "black" }}
              >
                Add
              </Button>
            </Box>
          </Box>
        </Modal>
      </div>
    </>
  );
}

export default App;
