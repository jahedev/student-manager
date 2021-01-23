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
      CampusId: null,
    },
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
    if (!this.state.studentInfo.studentname) {
      console.log(
        "this is a test to make sure the name is enterred, do this for all vals instead of campusId"
      )
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
