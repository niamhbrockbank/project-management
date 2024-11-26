import * as _ from "lodash";
import { useState } from "react";
import Header from "./components/Header";
import NoProjectSelected from "./components/NoProjectSelected";
import Project from "./components/Project";
import Sidebar from "./components/Sidebar";
import getDate from "./utils/getDate";

const NEW_PROJECT = {
  name: "New Project",
  description: "Description goes here...",
  tasks: [],
};

function App() {
  const [projects, setProjects] = useState([]);
  const [selectedProjectID, setSelectedProjectID] = useState(0);

  let selectedProject;
  if (projects.length > 0) {
    selectedProject =
      projects.length > 0
        ? projects.filter((p) => p.id === selectedProjectID)[0]
        : {};
  }

  function handleAddProject() {
    setProjects((existingProjects) => {
      const newProjectId = crypto.randomUUID();
      setSelectedProjectID(newProjectId);
      return [
        ..._.cloneDeep(existingProjects),
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

  function handleEditProject(property, newValue) {
    setProjects((prevProjects) => {
      const copyOfPrevProjects = _.cloneDeep(prevProjects);
      const selectedIndex = prevProjects.findIndex(
        (p) => p.id === selectedProjectID
      );

      let updatedProject = {};
      if (property === "tasks") {
        updatedProject = {
          ...copyOfPrevProjects[selectedIndex],
          tasks: [...copyOfPrevProjects[selectedIndex].tasks, newValue],
        };
      } else {
        updatedProject = {
          ...copyOfPrevProjects[selectedIndex],
          [property]: newValue,
        };
      }

      const updatedProjects = [
        ...copyOfPrevProjects.slice(0, selectedIndex),
        updatedProject,
        ...copyOfPrevProjects.slice(selectedIndex + 1),
      ];

      return updatedProjects;
    });
  }

  function handleDeleteTask(taskIndex) {
    setProjects((prevProjects) => {
      const copyOfProjects = _.cloneDeep(prevProjects);
      const selectedIndex = prevProjects.findIndex(
        (p) => p.id === selectedProjectID
      );

      const selectedProjectsTasks = prevProjects[selectedIndex].tasks;
      const updatedTasks = [
        ...selectedProjectsTasks.slice(0, taskIndex),
        ...selectedProjectsTasks.slice(taskIndex + 1),
      ];

      copyOfProjects[selectedIndex].tasks = [...updatedTasks];

      return copyOfProjects;
    });
  }

  let content;
  if (selectedProject) {
    content = (
      <Project
        project={selectedProject}
        onDelete={handleDeleteProject}
        onEditProject={handleEditProject}
        onDeleteTask={handleDeleteTask}
      />
    );
  } else {
    content = <NoProjectSelected onAddProject={handleAddProject} />;
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
      {content}
    </main>
  );
}

export default App;
