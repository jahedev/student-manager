import React, { Component } from "react"

import { connect } from "react-redux"

import { Link } from "react-router-dom"

import StudentById from "./StudentById"
import DeleteStudent from "./DeleteStudent"

class SingleStudent extends Component {
  render() {
    console.log("url param id:", this.props.match.params.id)
    return (
      <div>
        <p>**Single student component</p>
        <Link to="/allStudents">All Students</Link>
        <StudentById studentId={this.props.match.params.id} />
        <DeleteStudent />
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
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleStudent)
