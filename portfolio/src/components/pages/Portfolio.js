import React from 'react';
import Project from '../Project';

export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio</h1>
      <div class="album py-5">
          <div class="container">
      
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3"></div>
            <Project />
          </div>
      </div>
    </div>
  );
}
