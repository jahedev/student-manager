import React, { Component } from "react"

import { connect } from "react-redux"
import { deleteStudent, getAllStudents } from "../redux/reducers"

class DeleteStudent extends Component {
  handleSubmit = async () => {
    console.log("student to be deleted with id:", this.props.id)
    await this.props.deleteStudent(this.props.id)

    setTimeout(() => {
      this.props.getAllStudents()
    }, 200)
  }

  render() {
    return (
      <div>
        <button onClick={() => this.handleSubmit()}>Delete student</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteStudent: (deleteStudentId) =>
      dispatch(deleteStudent(deleteStudentId)),
    getAllStudents: () => dispatch(getAllStudents()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteStudent)
