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
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import "./App.css";

function App() {
  let todos = [];
  let dones = [];

  function handleAdd() {
    // TODO:
    // - Open modal with text input, add and close buttons
    // - After Add is pressed validate and save input into todos
    // - If validation wasn't succesful or close is pressed – handle
  }

  function handleEdit() {
    // TODO:
    // - Open modal with text input (old text pasted here), edit, delete and close buttons
    // - After Edit is pressed validate and save input into todos or dones
    // - If validation wasn't succesful or close is pressed – handle
  }

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
        <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
          <Button
            onClick={() => handleAdd()}
            variant="outlined"
            startIcon={<AddIcon />}
            sx={{ color: "white", borderColor: "white" }}
          >
            Add new
          </Button>
        </Box>
      </div>
    </>
  );
}

export default App;
