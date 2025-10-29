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
  const [todos, setTodos] = useState([]);
  const [dones, setDones] = useState([]);

  const [open, setOpen] = useState(false);
  const [newTask, setNewTask] = useState("");

  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [editList, setEditList] = useState(null);

  const handleOpen = (mode, index = null, list = null, text = "") => {
    if (mode === "add") {
      setIsEditing(false);
      setNewTask("");
    } else if (mode === "edit") {
      setIsEditing(true);
      setEditIndex(index);
      setEditList(list);
      setNewTask(text);
    }
    setOpen(true);
  };
  const handleClose = () => {
    setNewTask("");
    setIsEditing(false);
    setEditIndex(null);
    setEditList(null);
    setOpen(false);
  };

  const handleAdd = () => {
    if (!newTask.trim()) {
      alert("Please enter a task");
      return;
    }

    setTodos((prev) => [...prev, { isChecked: false, text: newTask }]);
    console.log("Added:", newTask);

    setNewTask("");
    setOpen(false);
  };

  const handleEditSave = () => {
    if (!newTask.trim()) {
      alert("Please enter a valid task");
      return;
    }

    if (editList === "todos") {
      setTodos((prev) =>
        prev.map((item, i) =>
          i === editIndex ? { ...item, text: newTask } : item
        )
      );
    } else if (editList === "dones") {
      setDones((prev) =>
        prev.map((item, i) =>
          i === editIndex ? { ...item, text: newTask } : item
        )
      );
    }

    handleClose();
  };

  const handleDelete = () => {
    if (editList === "todos") {
      setTodos((prev) => prev.filter((_, i) => i !== editIndex));
      console.log("Deleted a task");
    }

    if (editList === "dones") {
      setDones((prev) => prev.filter((_, i) => i !== editIndex));
      console.log("Moved to ToDos:", newTask);
    }

    handleClose();
  };

  const handleToggle = (index, item, from) => {
    const updatedItem = { ...item, isChecked: !item.isChecked };

    if (from === "todos") {
      setTodos((prev) => prev.filter((_, i) => i !== index));
      setDones((prev) => [...prev, updatedItem]);
      console.log("Moved to Dones:", newTask);
    }

    if (from === "dones") {
      setDones((prev) => prev.filter((_, i) => i !== index));
      setTodos((prev) => [...prev, updatedItem]);
      console.log("Moved to ToDos:", newTask);
    }
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

        {todos.length === 0 && dones.length === 0 ? (
          <Typography
            variant="h6"
            sx={{
              textAlign: "center",
              padding: "5rem 0 5rem 0",
              mt: 4,
              color: "gray",
            }}
          >
            No tasks here yet.
          </Typography>
        ) : (
          <>
            {/* To Do Section */}
            <section className="to-do-section">
              <Typography variant="h5" component="h2" gutterBottom>
                To Do
              </Typography>
              <div className="to-do-list">
                <FormGroup>
                  {todos.map((item, index) => (
                    <div key={index} className="list-item">
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={item.isChecked}
                            onChange={() => handleToggle(index, item, "todos")}
                          />
                        }
                        label={item.text}
                      />
                      <IconButton
                        aria-label="edit"
                        sx={{ color: "gray" }}
                        onClick={() =>
                          handleOpen("edit", index, "todos", item.text)
                        }
                      >
                        <EditIcon />
                      </IconButton>
                    </div>
                  ))}
                </FormGroup>
              </div>
            </section>
            {/* Done Section */}
            <section className="done-section">
              <Typography variant="h5" component="h2" gutterBottom>
                Done
              </Typography>
              <div className="done-list">
                <FormGroup>
                  {dones.map((item, index) => (
                    <div key={index} className="list-item">
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={item.isChecked}
                            onChange={() => handleToggle(index, item, "dones")}
                          />
                        }
                        label={item.text}
                      />
                      <IconButton
                        aria-label="edit"
                        sx={{ color: "gray" }}
                        onClick={() =>
                          handleOpen("edit", index, "dones", item.text)
                        }
                      >
                        <EditIcon />
                      </IconButton>
                    </div>
                  ))}
                </FormGroup>
              </div>
            </section>
          </>
        )}

        {/* Add Button */}
        <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
          <Button
            onClick={() => handleOpen("add")}
            variant="outlined"
            startIcon={<AddIcon />}
            sx={{ color: "white", borderColor: "white" }}
          >
            Add new
          </Button>
        </Box>

        {/* Modal */}
        <Modal open={open} onClose={handleClose}>
          <Box sx={modalStyle}>
            <Typography variant="h6" component="h2">
              {isEditing ? "Edit task:" : "Add new task:"}
            </Typography>

            <TextField
              fullWidth
              variant="outlined"
              placeholder={isEditing ? "Edit your task" : "Enter task"}
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              sx={{
                mt: 2,
                input: { color: "white" },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "gray" },
                  "&:hover fieldset": { borderColor: "white" },
                  "&.Mui-focused fieldset": { borderColor: "white" },
                },
              }}
            />

            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                gap: 1,
                mt: 3,
              }}
            >
              <Button
                onClick={handleDelete}
                variant="outlined"
                sx={{
                  color: "red",
                  borderColor: "red",
                  display: isEditing ? "block" : "none",
                }}
              >
                Delete
              </Button>
              <Button
                onClick={handleClose}
                variant="outlined"
                sx={{ color: "white", borderColor: "gray" }}
              >
                Cancel
              </Button>
              <Button
                onClick={isEditing ? handleEditSave : handleAdd}
                variant="contained"
                sx={{ bgcolor: "white", color: "black" }}
              >
                {isEditing ? "Save" : "Add"}
              </Button>
            </Box>
          </Box>
        </Modal>
      </div>
    </>
  );
}

export default App;
