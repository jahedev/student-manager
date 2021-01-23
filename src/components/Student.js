import axios from "axios"
import React, { Component } from "react"

class Student extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { id, studentname, email, image, gpa, CampusId } = this.props
    console.log(id, ":", studentname)
    return (
      <div>
        {/* <DeleteStudent /> */}
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
