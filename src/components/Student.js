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
    this.deleteStudent = this.deleteStudent.bind(this)
  }

  deleteStudent = (id) => {
    if (!id) return

    axios.delete(`http://localhost:8080/api/students/${id}`, {
      data: {},
    })

    setTimeout(() => {
      this.props.fetchAllStudents()
    }, 200)
  }

  editStudent = (editing) => {
    // if true, turn on editing mode, otherwise simply display student
    this.setState({ editing: editing })
  }

  render() {
    const { id, studentname, email, image, gpa, CampusId } = this.props
    let returnJSX = ''

    if (this.state.editing) {
      returnJSX = (
        <StudentEdit
          id={id}
          editStudent={this.editStudent}
          fetchAllStudents={this.props.fetchAllStudents}
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
          <button type='button' onClick={() => this.deleteStudent(id)}>
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
