import React, { Component } from "react"

import { Link } from "react-router-dom"

import { connect } from "react-redux"
import { getStudentById } from "../redux/reducers"

import Student from "./Student"

class StudentById extends Component {
  state = {
    studentId: "",
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })

    setTimeout(() => {
      console.log(this.state.studentId)
    }, 100)
  }

  submitForm = async (e) => {
    e.preventDefault()
    await this.fetchStudentById(this.state.studentId)
  }

  fetchStudentById = async (studentId) => {
    await this.props.getStudentById(studentId)

    setTimeout(() => {
      console.log(this.props.student)
    }, 100)
  }

  render() {
    return (
      <div>
        <Link to="/">Return Home</Link>
        <br />

        <h1>Student By Id Component</h1>
        <p>Search for a student by ID</p>

        <form onSubmit={(e) => this.submitForm(e)}>
          <label>
            Student Id:{" "}
            <input
              type="text"
              name="studentId"
              placeholder="e.g. 1"
              onChange={(e) => this.handleChange(e)}
            />
          </label>

          <input type="submit" value="Submit" />
        </form>

        {this.props.student.student !== undefined ? (
          <Student
            studentname={this.props.student.student.studentname}
            email={this.props.student.student.email}
            image={this.props.student.student.image}
            gpa={this.props.student.student.gpa}
            CampusId={this.props.student.student.CampusId}
          />
        ) : (
          <span />
        )}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    student: state.student,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getStudentById: (searchStudentId) =>
      dispatch(getStudentById(searchStudentId)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentById)
