import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Homepage from "./components/Homepage";
import AllStudents from "./components/AllStudents";
import NewStudent from "./components/NewStudent";
import NewCampus from "./components/NewCampus";
import About from "./components/About/About";

import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router basename={process.env.PUBLIC_URL}>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/allStudents" component={AllStudents} />
            <Route path="/newStudent" component={NewStudent} />
            <Route path="/newCampus" component={NewCampus} />
            <Route path="/about" component={About} />
          </Switch>
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/newCampus">Create New Campus</Link>
              </li>
              <li>
                <Link to="/newStudent">Create New Student</Link>
              </li>
              <li>
                <Link to="/allStudents">All Students</Link>
              </li>
            </ul>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;

{
  // all campuses
  // other routes
  // about page
  // folders for files?
  // move links to another file?
  // home page?
}
