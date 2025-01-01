import { useRef } from 'react';
import Button from './Button';

export default function CreateNewProject({ onSaveNewProject }) {
  const titleRef = useRef();
  const descriptionRef = useRef();

  const handleSaveNewProject = (e) => {
    e.preventDefault();

    if (
      !titleRef.current.value.trim() ||
      !descriptionRef.current.value.trim()
    ) {
      alert('The title and description fields cannot be blank');
      return;
    }

    const today = new Date();

    const newProject = {
      title: titleRef.current.value,
      description: descriptionRef.current.value,
      date: today.toISOString().split('T')[0],
      tasks: [],
    };

    onSaveNewProject(newProject);
  };

  return (
    <form className="project" onSubmit={handleSaveNewProject}>
      <div className="project-title">
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input ref={titleRef} type="text" id="title" required />
        </div>
        <Button type="submit" alt={true}>
          Save
        </Button>
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <input ref={descriptionRef} type="text" id="description" required />
      </div>
      <hr />
    </form>
  );
}
