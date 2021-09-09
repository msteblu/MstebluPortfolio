import React from 'react';
import gitHub from './assets/GitHub.png';
import linkedIn from './assets/LI.png';

export default function Footer() {
  return (
    <footer>
        <img src={gitHub} alt="GitHub Logo"></img>
        <img src={linkedIn} alt="LinkedIn Logo"></img>
        {/* <img href=".../public/assets/GitHub.png"></img> */}
        <p>Github</p>
        <p>LinkedIn</p>
        <p>StackOverflow</p>
    </footer>
  );
}
