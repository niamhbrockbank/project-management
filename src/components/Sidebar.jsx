import ProjectList from "./ProjectList";

export default function Sidebar({ projects, setProjects, selectedProjectID }) {
  function handleAddProject() {
    setProjects((existingProjects) => [
      ...existingProjects,
      { name: "kefdgdgshdfshdfdfhgfv", id: existingProjects.length + 1 },
    ]);
  }

  function isSelectedProject(project) {
    if (selectedProjectID !== project.id) {
      return false;
    }

    return true;
  }

  return (
    <section className="bg-black text-white w-[35rem] mt-16 px-11 py-11 pt-11 rounded-r-xl ">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        YOUR PROJECTS
      </h2>
      <button
        onClick={handleAddProject}
        className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100"
      >
        + Add Project
      </button>
      <ProjectList isSelectedProject={isSelectedProject} projects={projects} />
    </section>
  );
}
