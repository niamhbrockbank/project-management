import { useState } from "react";

export default function NewTask({ onEdit }) {
  const [newTask, setNewTask] = useState("");

  function handleChange(event) {
    setNewTask(event.target.value);
  }

  function handleAddTask() {
    onEdit("tasks", newTask);
  }

  return (
    <span>
      <input
        className="w-64 px-2 py-1 mb-8 rounded-sm bg-stone-200"
        value={newTask}
        onChange={(e) => handleChange(e)}
      />
      <button
        className="px-4 text-stone-700 hover:text-stone-950"
        onClick={handleAddTask}
      >
        Add Task
      </button>
    </span>
  );
}
