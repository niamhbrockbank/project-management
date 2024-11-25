export default function ProjectSummary({ project }) {
  const { name, date, description } = project;
  return (
    <section
      id="project-sumnmary"
      className="flex flex-col h-2/6 w-full justify-evenly"
    >
      <span className="flex justify-between">
        <h2>{name}</h2>
        <button>Delete</button>
      </span>
      <p>{date}</p>
      <p>{description}</p>
      <hr />
    </section>
  );
}
