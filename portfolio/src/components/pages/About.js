import React from 'react';
import photo from '../assets/Profile.jpeg';

export default function About() {
  return (
    <div className="py-5 text-center container">
      <div className="row py-lg-5">
        <div className="col-lg-6 col-md-8 mx-auto">
          <img src={photo} alt="Megan Steblay" className="img-fluid mx-auto photo"></img>
          <h1 className="fw-light">M e g a n   S t e b l a y</h1>
          <p className="lead text-muted">Welcome to my portfolio.</p>
          <p className="lead text-muted">Web Developer. Currently a student with the University of Minnesota's Full Stack Coding Bootcamp.</p>
        </div>
      </div>
    </div>
  );
}

