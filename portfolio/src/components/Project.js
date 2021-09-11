import React from 'react';

export default function Project(props) {
  return (
              <div className="col">
                <div className="card shadow-sm">
                  <img src={`${props.image}`} className="bd-placeholder-img card-img-top" width="100%" height="225" />

                  <div className="card-body">
                    <h4>{props.title}</h4>
                    <p className="card-text">{props.description}</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary extra-btn" onclick={props.app} >App</button>
                        <button type="button" className="btn btn-sm btn-outline-secondary extra-btn" onclick={props.repo} >Repo</button>
                      </div>
                      <small className="text-muted"></small>
                    </div>
                  </div>
                </div>
              </div>
  );
}