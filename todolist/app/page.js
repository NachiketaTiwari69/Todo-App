"use client"
import React,{useState} from "react";
import styles from "./page.css";

const page = () => {

  const [task, settask] = useState("")

  return (
    <>
      <div className="mainContainer">
        <h1>Todo App</h1>
        <form>
          <div className="upper">
            <input
              className="taskbox"
              type="text"
              placeholder="Add a new task"
              value={task}
            ></input>
            <button className="taskadd">+</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default page;
