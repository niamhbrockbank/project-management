export default function Sidebar({ projects, setProjects }) {
  function handleAddProject() {
    setProjects((existingProjects) => [
      ...existingProjects,
      { name: "kefdgdgshdfshdfdfhgfv", id: existingProjects.length + 1 },
    ]);
  }

  return (
    <section className="bg-black text-white w-[35rem] mt-16">
      <h2>YOUR PROJECTS</h2>
      <button
        onClick={handleAddProject}
        className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100"
      >
        + Add Project
      </button>
      <menu className="flex items-center justify-left gap-4 my-4">
        <ol>
          {projects.map((p) => (
            <span key={p.id}>
              <button>{p.name}</button>
            </span>
          ))}
        </ol>
      </menu>
    </section>
  );
}
