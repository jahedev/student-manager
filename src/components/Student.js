import axios from 'axios'
import React, { Component } from 'react'
import StudentEdit from './StudentEdit'

class Student extends Component {
  constructor(props) {
    super(props)

    this.state = {
      editing: false,
    }

    this.editStudent = this.editStudent.bind(this)
  }

  editStudent = (editing) => {
    this.setState({ editing: editing })
  }

  render() {
    const {
      id,
      studentname,
      email,
      image,
      gpa,
      CampusId,
      deleteStudent,
    } = this.props

    console.log(id, ':', studentname)

    let returnJSX = ''

    if (this.state.editing) {
      returnJSX = (
        <StudentEdit
          id={id}
          editStudent={this.editStudent}
          updateAllStudents={this.props.updateAllStudents}
        />
      )
    } else {
      returnJSX = (
        <div>
          <p>Name: {studentname}</p>
          <p>Email: {email}</p>
          <p>Image: {image}</p>
          <p>GPA: {gpa}</p>
          <p>CampusId: {CampusId}</p>
          <button type='button' onClick={() => deleteStudent(id)}>
            Delete {studentname}
          </button>
          <button type='button' onClick={() => this.editStudent(true)}>
            Edit {studentname}
          </button>
        </div>
      )
    }
    return <div>{returnJSX}</div>
  }
}

export default Student
