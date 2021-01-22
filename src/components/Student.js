import React, { Component } from "react"

class Student extends Component {
  render() {
    const { studentname, email, image, gpa, CampusId } = this.props
    return (
      <div>
        <p>Name: {studentname}</p>
        <p>Email: {email}</p>
        <p>Image: {image}</p>
        <p>GPA: {gpa}</p>
        <p>CampusId: {CampusId}</p>
      </div>
    )
  }
}

export default Student
