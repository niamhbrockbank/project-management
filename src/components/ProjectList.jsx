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
        {projects.map((p) => {
          let cssClasses = `w-full hover:bg-stone-800 text-left py-2 px-2 rounded-md`;

          if (isSelectedProject(p)) {
            cssClasses += " bg-stone-900 text-stone-200";
          } else {
            cssClasses += " font-light text-stone-400";
          }

          return (
            <span key={p.id} className="w-full">
              <button className={cssClasses} onClick={() => onSelect(p.id)}>
                {p.name}
              </button>
            </span>
          );
        })}
      </ul>
    </menu>
  );
}
