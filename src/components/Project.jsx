import ProjectSummary from "./ProjectSummary";
import Tasks from "./Tasks";

export default function Project({ project }) {
  return (
    <section id="project" className="w-full px-11">
      <ProjectSummary project={project} />
      <Tasks />
    </section>
  );
}
