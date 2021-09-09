import React from 'react';
import resume from '../assets/Resume_MSS.pdf';

export default function Resume() {
  return (
    <div className="py-5 text-center container">
      <div className="row py-lg-5">
        <div className="col-lg-6 col-md-8 mx-auto">
          <h1>My Resume</h1>
          <p>Download my <a href={resume} class="" target="_blank" rel="noopener noreferrer">resume</a></p>
          <h3 className="fw-light">Front-end Proficiencies</h3>
          <ul>
            <li className="lead text-muted">HTML</li>
            <li className="lead text-muted">CSS</li>
            <li className="lead text-muted">JavaScript</li>
            <li className="lead text-muted">jQuery</li>
            <li className="lead text-muted">Responsive design</li>
            <li className="lead text-muted">React</li>
            <li className="lead text-muted">Bootstrap</li>
          </ul>
          <h3 className="fw-light">Back-end Proficiencies</h3>
          <ul>
            <li className="lead text-muted">APIs</li>
            <li className="lead text-muted">Node</li>
            <li className="lead text-muted">Express</li>
            <li className="lead text-muted">MySQL, Sequelize</li>
            <li className="lead text-muted">MongoDB, Mongoose</li>
          </ul>
        </div>
      </div>
    </div>
  );
}