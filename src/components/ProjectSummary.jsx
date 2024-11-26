import { useEffect, useRef, useState } from "react";
import Modal from "./Modal";

export default function ProjectSummary({ project, onDelete, onEdit }) {
  const modal = useRef();
  const { name, date, description } = project;

  const [editedName, setEditedName] = useState(name);
  const [editedDescription, setEditedDescription] = useState(description);

  useEffect(() => {
    setEditedName(name);
    setEditedDescription(description);
  }, [project]);

  function handleSave(property) {
    let editedValue = editedDescription;

    if (property === "name") {
      editedValue = editedName.trim();

      if (editedValue === "") {
        modal.current.open();
        return;
      }
    }

    onEdit(property, editedValue);
  }

  function handleChangeName(event) {
    setEditedName(event.target.value);
  }

  function handleChangeDescription(event) {
    setEditedDescription(event.target.value);
  }

  return (
    <>
      <Modal ref={modal}>
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">
          Looks like you forgot to add a name!
        </p>
        <p className="text-stone-600 mb-4">Please add a project name.</p>
      </Modal>
      <section
        id="project-sumnmary"
        className="flex flex-col h-2/6 w-full mt-12 justify-between"
      >
        <span className="flex justify-between">
          <span>
            <input
              className="w-full text-2xl font-bold text-stone-700 my-4 bg-inherit focus:outline-stone-200"
              onBlur={() => handleSave("name")}
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
          onBlur={() => handleSave("description")}
          value={editedDescription}
        >
          {description}
        </textarea>
        <hr />
      </section>
    </>
  );
}
