import React from 'react';
import './styles.css';

const Skills = () => {
  return (
    <div className="skills-section">
      <h2>Skills</h2>

      <div className="skills-category">
        <h3>Languages / Frameworks</h3>
        <ul>
          <li>HTML / CSS</li>
          <li>JavaScript</li>
          <li>PHP</li>
          <li>Ruby on Rails</li>
          <li>React</li>
          <li>Python</li>
        </ul>
      </div>

      <div className="skills-category">
        <h3>Tools</h3>
        <ul>
          <li>Git & GitHub</li>
          <li>Docker</li>
          <li>XAMPP</li>
          <li>VS Code</li>
          <li>Postman</li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
