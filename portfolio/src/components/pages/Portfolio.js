import React from 'react';
import Project from '../Project';
// Images
import Tech from '../assets/images/Dashboard.gif';
import Trivia from '../assets/images/Trivialympics.gif';
import Blitz from '../assets/images/Mountain.png';
import Tracker from '../assets/images/Employee_Tracker.gif';
import Commerce from '../assets/images/ECommerce.gif';
import Weather from '../assets/images/weather.png';

const projects = [
  {
    image: `${Tech}`,
    title: 'Tech Blog',
    description: `This application provides a blog site where developers can publish blog posts and comment on others' blog posts. It provides users a space to discuss and learn with each other.`,
    app: `window.location.href='https://fast-meadow-10211.herokuapp.com/';`,
    repo: `window.location.href='https://github.com/msteblu/TechBlog';`,
  },
  {
    image: `${Trivia}`,
    title: 'Trivialympics',
    description: 'Trivia Olympics is an interactive full-stack application that allows you to log in to play a fun trivia game. Users compete to solve trivia questions and move across the board to win the game.',
    app: `window.location.href='https://young-harbor-83683.herokuapp.com/';`,
    repo: `window.location.href='https://github.com/msteblu/CodingLand';`,
  },
  {
    image: `${Blitz}`,
    title: 'Blitz and Chaos',
    description: 'Blitz and Chaos is a text-based, interactive story (run by JavaScript) providing you, the user, with a chance to play through a life as a hero. The choices you make along the way change the experience and outcome of your story.',
    app: `window.location.href='https://justinean.github.io/BlitzandChaos/';`,
    repo: `window.location.href='https://github.com/msteblu/BlitzandChaos';`,
  },
  {
    image: `${Tracker}`,
    title: 'Employee Tracker',
    description: `This is a command-line application that provides a solution for easily managing a company's employees. It allows employers to view and manage different aspects of the departments, roles, and employees in their company.`,
    app: `window.location.href='https://www.awesomescreenshot.com/video/4416767?key=1689c0490c9d56ff02dba9aad1fd25e1';`,
    repo: `window.location.href='https://github.com/msteblu/EmployeeTracker';`,
  },
  {
    image: `${Commerce}`,
    title: 'E-Commerce Backend',
    description: 'This application provides the back end so that an e-commerce website and company can easily manage their products and have the technology to compete with other companies. It uses an Express.js API and the Sequelize package to interact with a MySQL database.',
    app: `window.location.href='https://www.awesomescreenshot.com/video/4499834?key=e6b97f1ebf7ef168da3c5341bb964790';`,
    repo: `window.location.href='https://github.com/msteblu/E-Commerce_BackEnd';`,
  },
  {
    image: `${Weather}`,
    title: 'Weather Dashboard',
    description: 'This is a simple weather application. It was built in order to give users a way to check the weather and forecast for a specific city of their choice. It utilizes the OpenWeather API to provide up-to-date data and predictions.',
    app: `window.location.href='https://msteblu.github.io/WeatherDashboard/';`,
    repo: `window.location.href='https://github.com/msteblu/WeatherDashboard';`,
  },
];

export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio</h1>
      <div className="album py-5">
          <div className="container">
      
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              {projects.map((work) => (
                <Project image={work.image} title={work.title} description={work.description} app={work.app} repo={work.repo}/>
              ))}
            </div>
          </div>
      </div>
    </div>
  );
}