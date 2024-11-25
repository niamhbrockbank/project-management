export default function ProjectSummary({ project, onDelete }) {
  const { name, date, description } = project;
  return (
    <section
      id="project-sumnmary"
      className="flex flex-col h-2/6 w-full mt-12 justify-between"
    >
      <span className="flex justify-between">
        <span>
          <h2 className="text-2xl font-bold text-stone-800 my-4">{name}</h2>
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
