import { useState } from "react";
import Header from "./components/Header";
import Project from "./components/Project";
import Sidebar from "./components/Sidebar";

function App() {
  const [projects, setProjects] = useState([
    { name: "Learning React", id: 0 },
    { name: "Mastering React", id: 1 },
  ]);
  const [selectedProjectID, setSelectedProjectID] = useState(0);
  const selectedProject = projects.find((p) => p.id === selectedProjectID);

  return (
    <main className="h-screen my-8 flex">
      <Header />
      <Sidebar
        projects={projects}
        setProjects={setProjects}
        selectedProjectID={selectedProjectID}
      />
      <Project project={selectedProject} />
    </main>
  );
}

export default App;
