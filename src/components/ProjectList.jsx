export default function ProjectList({ isSelectedProject, projects }) {
  return (
    <menu className="mt-12">
      <ul className="flex flex-col items-center justify-left my-4 w-full">
        {projects.map((p) => (
          <span key={p.id} className="w-full">
            <button
              className={`w-full hover:bg-stone-800 text-left py-2 px-2 rounded-md ${
                isSelectedProject(p) ? " bg-stone-900" : "font-light"
              }`}
            >
              {p.name}
            </button>
          </span>
        ))}
      </ul>
    </menu>
  );
}
