import React, { Component } from "react"
import { deleteStudent } from "../redux/reducers"

class DeleteStudent extends Component {
  handleSubmit = async () => {
    // await this.deleteStudent(this.props.student.student.id)
  }

  render() {
    return (
      <div>
        <p>DeleteStudent Component</p>
        <button onClick={() => this.handleSubmit()}>Delete student</button>
      </div>
    )
  }
}

mapStateToProps = (state) => {
  return {
    student: state.student,
  }
}

mapDispatchToProps = (dispatch) => {
  return {
    deleteStudent: () => dispatch(deleteStudent()),
  }
}

export default DeleteStudent
