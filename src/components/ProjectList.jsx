export default function ProjectList({ selectedProjectID, projects, onSelect }) {
  function isSelectedProject(project) {
    if (selectedProjectID !== project.id) {
      return false;
    }

    return true;
  }

  return (
    <menu className="mt-12">
      <ul className="flex flex-col items-center justify-left my-4 w-full">
        {projects.map((p) => (
          <span key={p.id} className="w-full">
            <button
              className={`w-full hover:bg-stone-800 text-left py-2 px-2 rounded-md ${
                isSelectedProject(p) ? " bg-stone-900" : "font-light"
              }`}
              onClick={() => onSelect(p.id)}
            >
              {p.name}
            </button>
          </span>
        ))}
      </ul>
    </menu>
  );
}
