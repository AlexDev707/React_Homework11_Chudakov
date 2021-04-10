import React from "react";
import styles from "./TaskList.module.css"

export default function TaskList({ tasks, onDeleteTask }) {
  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <li>
            <h1 className={styles.id}>{task.id}</h1>
            <p className={styles.text}>{task.text}</p>
            <button className={styles.button} onClick={() => onDeleteTask(task.id)}>Видалити</button>
          </li>
        ))}
      </ul>
    </div>
  );
}