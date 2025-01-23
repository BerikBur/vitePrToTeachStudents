import React from 'react';
import './ProjectList.css';

interface Project {
  img: string;
  category: string;
}

interface ProjectListProps {
  projects: Project[];
}

export const ProjectList: React.FC<ProjectListProps> = ({ projects }) => {
  return (
    <div className="project-list">
      {projects.map((project, index) => (
        <div key={index} className="project-item">
          <img src={project.img} alt={project.category} />
        </div>
      ))}
    </div>
  );
};
