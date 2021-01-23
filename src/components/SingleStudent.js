import React, { Component } from "react"

import { connect } from "react-redux"
import StudentById from "./StudentById"

class SingleStudent extends Component {
  render() {
    console.log("url param id:", this.props.match.params.id)
    return (
      <div>
        <p>single student component</p>
        <StudentById studentId={this.props.match.params.id} />
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
