export default function Task({ task, index, onDelete }) {
  return (
    <div className="flex justify-between w-full px-4 py-2 rounded-md bg-stone-100">
      <p className="bg-inherit">{task}</p>
      <button onClick={() => onDelete(index)} className="bg-inherit font-light">
        Clear
      </button>
    </div>
  );
}
