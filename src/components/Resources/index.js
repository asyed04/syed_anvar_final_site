import React from 'react';
import './styles.css';

const Resources = () => {
  const resources = [
    {
      title: 'React Official Docs',
      icon: '📘',
      summary: 'Documentation and tutorials for building with React.',
      link: 'https://react.dev/'
    },
    {
      title: 'FreeCodeCamp',
      icon: '🎓',
      summary: 'Learn web development through free interactive lessons.',
      link: 'https://www.freecodecamp.org/'
    },
    {
      title: 'MDN Web Docs',
      icon: '🌐',
      summary: 'Reference for HTML, CSS, and JavaScript by Mozilla.',
      link: 'https://developer.mozilla.org/'
    }
  ];

  return (
    <div className="resources-section">
      <h2>Resources</h2>
      {resources.map((resource, index) => (
        <div className="resource" key={index}>
          <h3>{resource.icon} {resource.title}</h3>
          <p>{resource.summary}</p>
          <a href={resource.link} target="_blank" rel="noreferrer">Visit</a>
        </div>
      ))}
    </div>
  );
};

export default Resources;
