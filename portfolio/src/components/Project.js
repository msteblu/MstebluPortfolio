import React from 'react';

export default function Project() {
  return (
              <div class="col">
                <div class="card shadow-sm">
                  <img src="./assets/images/Dashboard.gif" class="bd-placeholder-img card-img-top" width="100%" height="225" />

                  <div class="card-body">
                    <h4>Tech Blog</h4>
                    <p class="card-text">This application provides a blog site where developers can publish blog posts and comment on others' blog posts. It provides users a space to discuss and learn with each other.</p>
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group">
                        <button type="button" class="btn btn-sm btn-outline-secondary extra-btn" onclick="window.location.href='https://fast-meadow-10211.herokuapp.com/';" >App</button>
                        <button type="button" class="btn btn-sm btn-outline-secondary extra-btn" onclick="window.location.href='https://github.com/msteblu/TechBlog';" >Repo</button>
                      </div>
                      <small class="text-muted"></small>
                    </div>
                  </div>
                </div>
              </div>
  );
}
