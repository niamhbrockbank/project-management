import { useState } from "react";
import Task from "./Task";

export default function Tasks({ tasks, onEdit }) {
  const [newTask, setNewTask] = useState("");

  function handleChange(event) {
    setNewTask(event.target.value);
  }

  function handleAddTask() {
    onEdit("tasks", newTask);
  }

  return (
    <>
      <h2 className="text-2xl font-bold text-stone-700 mb-4 mt-8">Tasks</h2>
      <span>
        <input
          className="w-64 px-2 py-1 mb-8 rounded-sm bg-stone-200"
          value={newTask}
          onChange={(e) => handleChange(e)}
        />
        <button className="px-4" onClick={handleAddTask}>
          Add Task
        </button>
      </span>
      <ul className="w-full">
        {tasks.map((t, i) => (
          <Task task={t} key={i} />
        ))}
      </ul>
    </>
  );
}
