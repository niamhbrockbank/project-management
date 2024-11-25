import ProjectSummary from "./ProjectSummary";
import Tasks from "./Tasks";

export default function Project({ project }) {
  return (
    <>
      <ProjectSummary></ProjectSummary>
      <Tasks />
    </>
  );
}
