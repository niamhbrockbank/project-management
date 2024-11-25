import NoProjectSelected from "./NoProjectSelected";
import ProjectSummary from "./ProjectSummary";
import Tasks from "./Tasks";

export default function Project({ project, onDelete }) {
  return (
    <>
      {!project && <NoProjectSelected />}
      {project && (
        <section id="project" className="w-full px-11">
          <ProjectSummary project={project} onDelete={onDelete} />
          <Tasks />
        </section>
      )}
    </>
  );
}
