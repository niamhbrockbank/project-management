import { useState } from "react";
import Header from "./components/Header";
import Project from "./components/Project";
import Sidebar from "./components/Sidebar";

function App() {
  const [projects, setProjects] = useState([
    { name: "Do soemthng", id: 1 },
    { name: "Do soemthafsd ng", id: 2 },
  ]);

  const selectedProject = projects.find((p) => p.id === 1);

  return (
    <main className="h-screen my-8 flex gap-8">
      <Header />
      <Sidebar projects={projects} setProjects={setProjects} />
      <Project project={selectedProject} />
    </main>
  );
}

export default App;
