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
