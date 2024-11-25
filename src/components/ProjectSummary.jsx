import { useEffect, useState } from "react";

export default function ProjectSummary({ project, onDelete, onEdit }) {
  const { name, date, description } = project;

  const [editedName, setEditedName] = useState(name);
  const [editedDescription, setEditedDescription] = useState(description);

  useEffect(() => {
    setEditedName(name);
    setEditedDescription(description);
  }, [project]);

  function handleChangeName(event) {
    setEditedName(event.target.value);
  }

  function handleChangeDescription(event) {
    setEditedDescription(event.target.value);
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
            onBlur={() => onEdit("name", editedName)}
            onChange={(e) => handleChangeName(e)}
            value={editedName}
          />
          <p className="text-stone-500">{date}</p>
        </span>
        <button onClick={onDelete} className="text-stone-800 my-4 font-light">
          Delete
        </button>
      </span>

      <textarea
        className="bg-inherit focus:outline-stone-200"
        onChange={(e) => handleChangeDescription(e)}
        onBlur={() => onEdit("description", editedDescription)}
        value={editedDescription}
      >
        {description}
      </textarea>
      <hr />
    </section>
  );
}
