import React from "react";
import styles from "./TaskEditor.module.css"

export default function TaskEditor({ onAddTasks }) {
  return (
    <div className={styles.block}>
      <button className={styles.button} onClick={onAddTasks}>Add Task</button>
    </div>
  );
}