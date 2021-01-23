import React, { Component } from "react"

import { connect } from "react-redux"
import { deleteStudent, getAllStudents, getCampusById } from "../redux/reducers"

class DeleteStudent extends Component {
  handleSubmit = async () => {
    console.log("student to be deleted with id:", this.props.id)
    await this.props.deleteStudent(this.props.id)

    setTimeout(() => {
      this.props.getAllStudents()
    }, 300)

    // to re render students in single campus view when deleted
    setTimeout(() => {
      this.props.getCampusById(this.props.CampusId)
    }, 300)
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
    getCampusById: (searchCampusId) => dispatch(getCampusById(searchCampusId)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteStudent)
