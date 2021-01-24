import React, { Component } from "react"

import { Link } from "react-router-dom"

import { connect } from "react-redux"
import { getAllStudents } from "../redux/reducers"

import Student from "./Student"
import CreateStudent from "./CreateStudent"

class AllStudents extends Component {
  state = {
    addingStudent: false,
  }

  async componentDidMount() {
    await this.fetchAllStudents()
  }

  async fetchAllStudents() {
    await this.props.getAllStudents()
    setTimeout(() => {
      console.log(this.props.students)
    }, 200)
  }

  render() {
    return (
      <div>
        <Link to="/">Return Home</Link>
        <br />

        <h1>All Students Component</h1>

        <div>
          <button
            onClick={() =>
              this.setState({ addingStudent: !this.state.addingStudent })
            }
          >
            Add Student
          </button>
        </div>
        {this.state.addingStudent === true ? (
          <div>
            <CreateStudent />
            <div>
              <button onClick={() => this.setState({ addingStudent: false })}>
                Cancel Addition
              </button>
              <br />
              <br />
            </div>
          </div>
        ) : (
          <br />
        )}

        {this.props.students !== undefined ? (
          this.props.students.map((student, index) => (
            <Student
              key={index}
              id={student.id}
              studentname={student.studentname}
              email={student.email}
              image={student.image}
              gpa={student.gpa}
              CampusId={student.CampusId}
            />
          ))
        ) : (
          <br />
        )}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    students: state.students,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAllStudents: () => dispatch(getAllStudents()),
    // deleteStudent: () => dispatch(deleteStudent()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllStudents)
