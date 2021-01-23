import React, { Component } from "react"

import { Link } from "react-router-dom"

import DeleteStudent from "./DeleteStudent"

class Student extends Component {
  render() {
    const { id, studentname, email, image, gpa, CampusId } = this.props
    console.log(id, ":", studentname)
    return (
      <div>
        <DeleteStudent id={id} />
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
