import React, { Component } from "react"
import { Link } from "react-router-dom"

class Homepage extends Component {
  render() {
    return (
      <div>
        <div>
          <h1>Homepage</h1>
        </div>

        <div>
          <Link to="/allStudents">All Students</Link>
          <br />
          <Link to="/allCampuses">All Campuses</Link>
          <br />
          <Link to="/createStudent">Create Student</Link>
          <br />
          <Link to="/createCampus">Create Campus</Link>
        </div>
      </div>
    )
  }
}

export default Homepage
