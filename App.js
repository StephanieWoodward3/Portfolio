import React from 'react';
import './App.css';
import Programming from "./components/Programming";
import AboutMe from "./components/AboutMe";
import Resume from "./components/Resume";
import Contact from "./components/Contact"
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Stitch1 from "./Videos/StitchSquint.png";
import Stitch2 from "./Videos/StitchSmile.png";
import "./components/AllCode.css";

function App() {

  return (
    <Router>
    <div className="jumbotron jumbotron-fluid">
      <div className="jumboContent">
        <img src={Stitch1} alt="Stitch Squinting" height="15%" width="15%" ></img>
        <h1 className="d-flex align-self-center justify-content-center"> The Portfolio of <br></br>Stephanie Woodward </h1>
        <img src={Stitch2} alt="Stitch Smiling" height="15%" width="10%"></img>
      </div>
    </div>
    <div>
        <nav className="navbar navbar-expand-sm justify-content-center bg-info navbar-dark p-5">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="/">Home Page</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="/programming-experience">Programming History and Examples</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="/resume">Resume</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="/contact">Contact Me</a>
            </li>
          </ul>
          </nav>
          <Switch>
            <Route path="/programming-experience">
              <Programming />
            </Route>
            <Route path="/resume">
              <Resume />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/">
              <AboutMe />
            </Route>
          </Switch>
  
    </div>
    </Router>
  );
}

export default App;
