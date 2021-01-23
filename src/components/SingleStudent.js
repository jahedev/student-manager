import React, { Component } from "react"

import { connect } from "react-redux"
import { deleteStudent, getStudentById } from "../redux/reducers"
import { Link, Redirect } from "react-router-dom"

class SingleStudent extends Component {
  state = {
    redirect: false,
  }

  componentDidMount = async () => {
    await this.props.getStudentById(this.props.match.params.id)
  }

  handleSubmit = async () => {
    console.log("student to be deleted with id:", this.props.match.params.id)
    await this.props.deleteStudent(this.props.student.id)

    setTimeout(() => {
      this.setState({
        redirect: true,
      })
    }, 400)
  }

  render() {
    if (this.state.redirect === true) {
      return <Redirect to="/allStudents" />
    }
    console.log("url param id:", this.props.match.params.id)
    return (
      <div>
        <Link to="/allStudents">All Students</Link>
        <br />
        <Link to="/">Return Home</Link>
        <br />

        {this.props.student !== undefined ? (
          <div>
            <p>Name: {this.props.student.studentname}</p>
            <p>Email: {this.props.student.email}</p>
            <p>Image: {this.props.student.image}</p>
            <p>GPA: {this.props.student.gpa}</p>
            <p>CampusId: {this.props.student.CampusId}</p>
          </div>
        ) : (
          <br />
        )}

        <div>
          <button onClick={() => this.handleSubmit()}>Delete student</button>
        </div>
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
    deleteStudent: (deleteStudentId) =>
      dispatch(deleteStudent(deleteStudentId)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleStudent)
