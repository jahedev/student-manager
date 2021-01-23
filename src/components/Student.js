import axios from "axios"
import React, { Component } from "react"

import { Link } from "react-router-dom"

class Student extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { id, studentname, email, image, gpa, CampusId } = this.props
    console.log(id, ":", studentname)
    return (
      <div>
        <Link to={`/singleStudent/${id}`}>Name: {studentname}</Link>
        <p>Email: {email}</p>
        <p>Image: {image}</p>
        <p>GPA: {gpa}</p>
        <p>CampusId: {CampusId}</p>
      </div>
    )
  }
}

export default Student
