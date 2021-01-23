import React, { Component } from "react"

import { Link } from "react-router-dom"

import { createStudent } from "../redux/reducers"
import { connect } from "react-redux"

class CreateStudent extends Component {
  render() {
    return (
      <div>
        <Link to="/">Return Home</Link>
        <p>create student component</p>
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
