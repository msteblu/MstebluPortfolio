import React from 'react';
import gitHub from './assets/icons/githubIcon.png';
import linkedIn from './assets/icons/linkedInIcon.png';
import stackOverflow from './assets/icons/stackoverflow.png';

export default function Footer() {
  return (
    <footer className="footer mt-auto py-3 bg-light pink">
      <div className="container d-flex justify-content-center">
        <a href="https://github.com/msteblu" target="_blank" rel="noreferrer">
          <img className="icon" src={gitHub} alt="GitHub Logo"></img>
        </a>
        <a href="https://www.linkedin.com/in/megan-steblay-65a5321b5/" target="_blank" rel="noreferrer">
          <img className="icon" src={linkedIn} alt="LinkedIn Logo"></img>
        </a>
        <a href="https://stackoverflow.com/users/15417427/msteblu" target="_blank" rel="noreferrer">
          <img className="icon" src={stackOverflow} alt="StackOverflow Logo"></img>
        </a>
      </div>
    </footer>
  );
}