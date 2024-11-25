import { useState } from "react";

export default function ProjectSummary({ project, onDelete, onEdit }) {
  const { name, date, description } = project;

  const [editedName, setEditedName] = useState(name);

  function handleChange(event) {
    setEditedName(event.target.value);
  }

  return (
    <section
      id="project-sumnmary"
      className="flex flex-col h-2/6 w-full mt-12 justify-between"
    >
      <span className="flex justify-between">
        <span>
          <input
            className="w-full text-2xl font-bold text-stone-800 my-4 bg-inherit focus:outline-stone-200"
            value={editedName}
            onChange={(e) => handleChange(e)}
            onBlur={() => onEdit(editedName)}
          />
          <p className="text-stone-500">{date}</p>
        </span>
        <button onClick={onDelete} className="text-stone-800 my-4 font-light">
          Delete
        </button>
      </span>

      <p>{description}</p>
      <hr />
    </section>
  );
}
