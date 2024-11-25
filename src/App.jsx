import { useState } from "react";
import Header from "./components/Header";
import Project from "./components/Project";
import Sidebar from "./components/Sidebar";

const INITIAL_PROJECTS = [
  {
    name: "Learning React",
    id: 0,
    date: "Dec 3rd, 2024",
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

  function handleDeleteProject() {
    setProjects((existingProjects) => {
      const updatedProjects = existingProjects.filter(
        (p) => p.id != selectedProjectID
      );
      setSelectedProjectID((currentId) => currentId + 1);
      return updatedProjects;
    });
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
      <Project project={selectedProject} onDelete={handleDeleteProject} />
    </main>
  );
}

export default App;
