import React, { Component } from "react"

import { connect } from "react-redux"
import { deleteStudent } from "../redux/reducers"

import { Link } from "react-router-dom"

class DeleteStudent extends Component {
  // state = {
  //   deleteStudentId: this.props.student.id,
  // }

  // componentDidMount = () => {
  //   console.log("comp did mount ran for DeleteStudent")
  //   this.setState({
  //     deleteStudentId: this.props.student.id,
  //   })
  // }

  handleSubmit = async () => {
    if (this.props.student === undefined || this.props.student === "") {
      console.log("no student to delete")
      return
    }
    console.log("student to be deleted with id:", this.props.student.id)
    await this.props.deleteStudent(this.props.student.id)
  }

  render() {
    return (
      <div>
        <Link to="/">Return Home</Link>
        <p>DeleteStudent Component</p>
        <button onClick={() => this.handleSubmit()}>Delete student</button>
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
    deleteStudent: (deleteStudentId) =>
      dispatch(deleteStudent(deleteStudentId)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteStudent)
