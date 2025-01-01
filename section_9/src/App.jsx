import { useState, useRef } from 'react';
import { INITIAL_PROJECTS } from './projects';
import SideBar from './components/SideBar';
import Project from './components/Project';
import CreateNewProject from './components/CreateNewProject';

function App() {
  const taskInput = useRef();
  const [projects, setProjects] = useState([
    ...INITIAL_PROJECTS.map((project) => project),
  ]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [editMode, setEditMode] = useState(false);

  const handleAddProject = () => {
    setEditMode(true);
  };

  const handleSelectProject = (projectId) => {
    setSelectedProject(projects.find((x) => x.id === projectId));
  };

  const handleAddTask = (projectId) => {
    if (taskInput.current.value.length === 0) {
      return;
    }

    const project = projects.find((x) => x.id === projectId);

    let taskId = 0;
    project.tasks.forEach((task) => {
      if (task.id > taskId) {
        taskId = task.id;
      }
    });
    taskId++;
    const newTask = { id: taskId, title: taskInput.current.value };

    const projectsCopy = [...projects.map((project) => project)];
    projectsCopy.forEach((project) => {
      if (project.id === projectId) {
        project.tasks.unshift(newTask);
      }
    });

    taskInput.current.value = '';
    setProjects(projectsCopy);
  };

  const handleRemoveTask = (projectId, taskId) => {
    const projectsCpy = [...projects.map((project) => project)];
    const project = projectsCpy.find((x) => x.id === projectId);

    project.tasks = project.tasks.filter((task) => task.id !== taskId);

    setProjects(projectsCpy);
  };

  const handleRemoveProject = (projectId) => {
    let projectsCpy = [...projects.map((project) => project)];
    projectsCpy = projectsCpy.filter((project) => project.id !== projectId);
    setSelectedProject(null);
    setProjects(projectsCpy);
  };

  const handleSaveNewProject = (newProject) => {
    newProject.id = Math.max(...projects.map((project) => project.id)) + 1;
    const projectsCpy = [...projects.map((project) => project)];
    projectsCpy.push(newProject);
    setEditMode(false);
    setProjects(projectsCpy);
  };

  return (
    <>
      <SideBar
        projects={projects}
        onAddProject={handleAddProject}
        onSelectProject={handleSelectProject}
      />
      {!editMode && (
        <Project
          project={selectedProject}
          editMode={editMode}
          ref={taskInput}
          onAddTask={handleAddTask}
          onRemoveTask={handleRemoveTask}
          onRemoveProject={handleRemoveProject}
        />
      )}
      {editMode && <CreateNewProject onSaveNewProject={handleSaveNewProject} />}
    </>
  );
}

export default App;
