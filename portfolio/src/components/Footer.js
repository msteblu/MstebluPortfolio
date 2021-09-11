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


{/* <footer class="text-muted py-5">
        <div class="container">
            <p class="float-end mb-1">
            <a href="#">Back to top</a>
            </p>
        </div>
    </footer> */}