import Task from "./Task";

export default function Tasks({ tasks }) {
  return (
    <>
      <h2 className="text-2xl font-bold text-stone-700 mb-4 mt-8">Tasks</h2>
      <ul className="w-full">
        {tasks.map((t, i) => (
          <Task task={t} key={i} />
        ))}
      </ul>
    </>
  );
}
