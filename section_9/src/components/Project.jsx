import Button from './Button';
import { formatDate } from '../utils/helper-functions';
import './Project.css';

export default function Project({
  project,
  onAddTask,
  onRemoveTask,
  onRemoveProject,
  ref,
}) {
  if (!project) {
    return (
      <div className="project no-content">
        <h2>Please select a project to add tasks.</h2>
      </div>
    );
  }

  return (
    <div className="project">
      <div className="project-title">
        <h1>{project.title}</h1>
        <Button onClick={() => onRemoveProject(project.id)} alt={true}>
          Delete
        </Button>
      </div>
      <p className="project-date">{formatDate(project.date)}</p>
      <p className="project-description">{project.description}</p>
      <hr />
      <h2>Tasks</h2>
      <form>
        <input ref={ref} type="text" />
        <Button type="button" onClick={() => onAddTask(project.id)}>
          Add Task
        </Button>
      </form>
      <ul className="project-tasks">
        {project.tasks.map((task) => {
          return (
            <li key={task.id}>
              {task.title}{' '}
              <Button
                onClick={() => onRemoveTask(project.id, task.id)}
                alt={true}
              >
                Clear
              </Button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
