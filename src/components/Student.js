import React, { Component } from "react"

import { Link } from "react-router-dom"

import DeleteStudent from "./DeleteStudent"

class Student extends Component {
  render() {
    const { id, studentname, email, image, gpa, CampusId } = this.props
    console.log(id, ":", studentname)
    return (
      <div>
        <DeleteStudent id={id} CampusId={CampusId} />
        <Link to={`/singleStudent/${id}`}>Name: {studentname}</Link>
        {/* Requirements just want student names displayed on all students */}
        {/* <p>Email: {email}</p> */}
        {/* <p>Image: {image}</p> */}
        {/* <p>GPA: {gpa}</p> */}
        {/* <p>CampusId: {CampusId}</p> */}
      </div>
    )
  }
}

export default Student
