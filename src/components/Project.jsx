import ProjectSummary from "./ProjectSummary";
import Tasks from "./Tasks";

export default function Project({ project }) {
  return (
    <section id="project">
      <ProjectSummary project={project} />
      <Tasks />
    </section>
  );
}
