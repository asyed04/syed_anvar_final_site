import React from 'react';
import './styles.css';

const Work = () => {
  const projects = [
    {
      title: 'Pet Adoption CMS',
      description: 'A PHP and MySQL project to manage pet adoptions using XAMPP.',
      image: 'https://via.placeholder.com/200', // Replace with real image link if available
      link: 'https://github.com/asyed04/pet-adoption-cms',
      tech: ['PHP', 'MySQL', 'HTML', 'CSS']
    },
    {
      title: 'E-commerce Rails Store',
      description: 'An anime + FPS-themed accessories store built using Rails 7.',
      image: 'https://via.placeholder.com/200',
      link: 'https://github.com/asyed04/otakuwarrior-store',
      tech: ['Ruby on Rails', 'Bootstrap', 'SQLite']
    }
  ];

  return (
    <div className="work-section">
      <h2>Work</h2>
      {projects.map((project, index) => (
        <div className="project" key={index}>
          <img src={project.image} alt={project.title} />
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <a href={project.link} target="_blank" rel="noreferrer">View Project</a>
          <ul>
            {project.tech.map((techItem, i) => (
              <li key={i}>{techItem}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Work;
