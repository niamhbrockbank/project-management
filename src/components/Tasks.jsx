import NewTask from "./NewTask";
import Task from "./Task";

export default function Tasks({ tasks, onEdit, onDelete }) {
  return (
    <>
      <h2 className="text-2xl font-bold text-stone-700 mb-4 mt-8">Tasks</h2>
      <NewTask onEdit={onEdit} />
      {tasks.length === 0 && <p>This project does not have any tasks yet.</p>}
      <ul className="w-full">
        {tasks.map((t, i) => (
          <Task task={t} key={i} onDelete={onDelete} index={i} />
        ))}
      </ul>
    </>
  );
}
