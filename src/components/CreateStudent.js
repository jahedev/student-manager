import React, { Component } from "react"

import { Link, Redirect } from "react-router-dom"

import { createStudent, getCampusById, getStudentById } from "../redux/reducers"
import { connect } from "react-redux"

class CreateStudent extends Component {
  state = {
    redirect: false,
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
    console.log("CAMPUS ID IN SUBMIT FUNCT:", this.state.CampusId)
    e.preventDefault()
    const { studentname, email, image, gpa, CampusId } = this.state.studentInfo
    if (!studentname || !email || !image || !gpa) {
      console.warn(
        "Please enter a value for all required (*) fields: studentname, email, image, gpa"
      )
      return
    }

    // remove object property because backend won't accept empty property
    if (!CampusId) {
      delete this.state.studentInfo.CampusId
    }

    setTimeout(() => {
      this.props.createStudent(this.state.studentInfo)
    }, 300)

    // sets campus state to created student's campus so that campus redirect works in single student view after creation
    setTimeout(() => {
      this.props.getCampusById(this.props.student.CampusId)
    }, 600)

    setTimeout(() => {
      this.setState({ redirect: true })
    }, 800)
  }

  render() {
    if (this.state.redirect === true) {
      return <Redirect to={`/singleStudent/${this.props.student.id}`} />
    }
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <label>
              Name:
              <input
                type="text"
                name="studentname"
                onChange={(e) => this.handleChange(e)}
              />
            </label>
          </div>

          <div>
            <label>
              Email:
              <input
                type="email"
                name="email"
                onChange={(e) => this.handleChange(e)}
              />
            </label>
          </div>

          <div>
            <label>
              Image:
              <input
                type="text"
                name="image"
                onChange={(e) => this.handleChange(e)}
              />
            </label>
          </div>

          <div>
            <label>
              GPA:
              <input
                type="number"
                step="0.01"
                name="gpa"
                onChange={(e) => this.handleChange(e)}
              />
            </label>
          </div>

          <div>
            <label>
              Campus Id:
              <input
                type="number"
                name="CampusId"
                onChange={(e) => this.handleChange(e)}
              />
            </label>
          </div>

          <div>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    student: state.student,
    // needed for redirect, set to created student's campus on creation
    campus: state.campus,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createStudent: (studentInfo) => dispatch(createStudent(studentInfo)),
    getStudentById: (searchStudentId) =>
      dispatch(getStudentById(searchStudentId)),
    getCampusById: (searchCampusId) => dispatch(getCampusById(searchCampusId)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateStudent)
