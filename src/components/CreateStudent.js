import React, { Component } from "react"

import { Link } from "react-router-dom"

import { createStudent } from "../redux/reducers"
import { connect } from "react-redux"

class CreateStudent extends Component {
  state = {
    studentInfo: {
      studentname: "",
      email: "",
      image: "",
      gpa: null,
    },
    // Campus is optional, thus outside required fields obj of studentInfo
    CampusId: null,
  }

  handleChange = (e) => {
    this.setState({
      studentInfo: {
        ...this.state.studentInfo,
        [e.target.name]: e.target.value,
      },
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { studentname, email, image, gpa } = this.state.studentInfo
    if (!studentname && !email && !image && !gpa) {
      console.error(
        "Please enter a value for all required (*) fields: studentname, email, image, gpa"
      )
      return
    }

    // if CampusId provided, append it to the student info object
    if (this.state.CampusId) {
      this.setState({
        studentInfo: {
          ...this.state.studentInfo,
          CampusId: this.state.CampusId,
        },
      })
    }

    setTimeout(() => {
      this.props.createStudent(this.state.studentInfo)
    }, 500)
  }

  render() {
    return (
      <div>
        <Link to="/">Return Home</Link>
        <p>create student component</p>

        <form onSubmit={(e) => this.handleSubmit(e)}>
          <label>
            Name:
            <input
              type="text"
              name="studentname"
              onChange={(e) => this.handleChange(e)}
            />
          </label>

          <label>
            Email:
            <input
              type="email"
              name="email"
              onChange={(e) => this.handleChange(e)}
            />
          </label>

          <label>
            Image:
            <input
              type="text"
              name="image"
              onChange={(e) => this.handleChange(e)}
            />
          </label>

          <label>
            GPA:
            <input
              type="number"
              step="0.01"
              name="gpa"
              onChange={(e) => this.handleChange(e)}
            />
          </label>

          <label>
            Campus Id:
            <input
              type="number"
              name="CampusId"
              onChange={(e) => this.handleChange(e)}
            />
          </label>

          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    createStudent: (studentInfo) => dispatch(createStudent(studentInfo)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateStudent)
