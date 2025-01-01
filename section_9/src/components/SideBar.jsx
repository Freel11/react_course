import Button from './Button';
import './SideBar.css';

export default function SideBar({ projects, onAddProject, onSelectProject }) {
  return (
    <div className="sidebar">
      <h1>Your Projects</h1>
      <Button onClick={onAddProject}>Add Project</Button>
      <ul className="projects-list">
        {projects.map((project) => {
          return (
            <li key={project.id} onClick={() => onSelectProject(project.id)}>
              {project.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
