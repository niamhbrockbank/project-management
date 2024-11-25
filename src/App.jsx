import { useState } from "react";
import Header from "./components/Header";
import Project from "./components/Project";
import Sidebar from "./components/Sidebar";

const INITIAL_PROJECTS = [
  {
    name: "Learning React",
    id: 0,
    date: "3/12/24",
    description:
      "Learn React from the ground up. Start with the basics and finish with more advanced knowledge.",
  },
  { name: "Mastering React", id: 1 },
];

function App() {
  const [projects, setProjects] = useState(INITIAL_PROJECTS);

  const [selectedProjectID, setSelectedProjectID] = useState(0);
  const selectedProject = projects.find((p) => p.id === selectedProjectID);

  function handleAddProject() {
    setProjects((existingProjects) => {
      const newProjectId = existingProjects.length + 1;
      setSelectedProjectID(newProjectId);
      return [...existingProjects, { name: "New Project", id: newProjectId }];
    });
  }

  function handleSelectProject(projectID) {
    setSelectedProjectID(projectID);
  }

  return (
    <main className="h-screen my-8 flex">
      <Header />
      <Sidebar
        projects={projects}
        onAddProject={handleAddProject}
        selectedProjectID={selectedProjectID}
        onSelectProject={handleSelectProject}
      />
      <Project project={selectedProject} />
    </main>
  );
}

export default App;
