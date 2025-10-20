import { useState } from "react";
import { useEffect } from "react";
import "./App.css";

function App() {
  return (
    <>
      <div className="wrapper">
        <h1 className="heading">Clean To-Do</h1>
        <section className="to-do-section">
          <h2>To Do</h2>
          <div className="to-do-list">
            <div className="list-item">
              <div className="checkbox-and-label">
                <input
                  type="checkbox"
                  id="list-item-1"
                  name="list-item-1"
                  value="eat"
                ></input>
                <label htmlFor="list-item-1">eat</label>
                <br />
              </div>
              <button>Edit</button>
            </div>
            <div className="list-item">
              <div className="checkbox-and-label">
                <input
                  type="checkbox"
                  id="list-item-2"
                  name="list-item-2"
                  value="sleep"
                ></input>
                <label htmlFor="list-item-2">sleep</label>
                <br />
              </div>
              <button>Edit</button>
            </div>
            <div className="list-item">
              <div className="checkbox-and-label">
                <input
                  type="checkbox"
                  id="list-item-3"
                  name="list-item-3"
                  value="repeat"
                ></input>
                <label htmlFor="list-item-3">repeat</label>
                <br />
              </div>
              <button>Edit</button>
            </div>
          </div>
        </section>
        <section className="done-section">
          <h2>Done</h2>
          <div className="done-list">
            <div className="list-item">
              <div className="checkbox-and-label">
                <input
                  type="checkbox"
                  id="list-item-4"
                  name="list-item-4"
                  value="make a todo app"
                ></input>
                <label htmlFor="list-item-4">make a todo app</label>
                <br />
              </div>
              <button>Edit</button>
            </div>
          </div>
        </section>
        <button className="add-btn">Add new</button>
      </div>
    </>
  );
}

export default App;
