import { useState } from "react";
import Header from "./components/Header";
import Project from "./components/Project";
import Sidebar from "./components/Sidebar";
import getDate from "./utils/getDate";

const INITIAL_PROJECTS = [
  {
    name: "Learning React",
    id: crypto.randomUUID(),
    date: "Tues Dec 3 2024",
    description:
      "Learn React from the ground up. Start with the basics and finish with more advanced knowledge.",
  },
  {
    name: "Mastering React",
    id: crypto.randomUUID(),
    date: "Wed Dec 4 2024",
    description: "These are some really advanced concepts.",
  },
];

const NEW_PROJECT = {
  name: "New Project",
  description: "",
};

function App() {
  const [projects, setProjects] = useState(INITIAL_PROJECTS);
  const [selectedProjectID, setSelectedProjectID] = useState(
    INITIAL_PROJECTS[0].id
  );

  const selectedProject = projects.find((p) => p.id === selectedProjectID);

  function handleAddProject() {
    setProjects((existingProjects) => {
      const newProjectId = crypto.randomUUID();
      setSelectedProjectID(newProjectId);
      return [
        ...existingProjects,
        { ...NEW_PROJECT, id: newProjectId, date: getDate() },
      ];
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
      setSelectedProjectID(0);
      return updatedProjects;
    });
  }

  function handleEditProjectName(newName) {
    setProjects((prevProjects) => {
      const copyOfPrevProjects = [...prevProjects];
      const selectedIndex = prevProjects.findIndex(
        (p) => p.id === selectedProjectID
      );

      const updatedProject = {
        ...copyOfPrevProjects[selectedIndex],
        name: newName,
      };

      const updatedProjects = [
        ...copyOfPrevProjects.slice(0, selectedIndex),
        updatedProject,
        ...copyOfPrevProjects.slice(selectedIndex + 1),
      ];

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
      <Project
        project={selectedProject}
        onDelete={handleDeleteProject}
        onEditProjectName={handleEditProjectName}
      />
    </main>
  );
}

export default App;
