import ProjectSummary from "./ProjectSummary";
import Tasks from "./Tasks";

export default function Project({
  project,
  onDelete,
  onEditProject,
  onDeleteTask,
}) {
  return (
    <>
      <section id="project" className="w-full px-11">
        <ProjectSummary
          project={project}
          onDelete={onDelete}
          onEdit={onEditProject}
        />
        <Tasks
          tasks={project.tasks}
          onEdit={onEditProject}
          onDelete={onDeleteTask}
        />
      </section>
      )
    </>
  );
}
