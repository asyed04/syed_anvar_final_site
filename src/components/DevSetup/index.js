import React from 'react';
import './styles.css';

const DevSetup = () => {
  return (
    <div className="dev-setup">
      <h2>Developer Setup</h2>

      <div className="setup-section">
        <h3>VS Code Setup</h3>
        <p>Extensions: Prettier, Live Server, GitLens</p>
        <p>Theme: GitHub Dark</p>
      </div>

      <div className="setup-section">
        <h3>Terminal Setup</h3>
        <p>Using Windows PowerShell and VS Code integrated terminal.</p>
      </div>

      <div className="setup-section">
        <h3>Preferred Editor Font</h3>
        <p>Fira Code with ligatures enabled for better readability.</p>
      </div>
    </div>
  );
};

export default DevSetup;
