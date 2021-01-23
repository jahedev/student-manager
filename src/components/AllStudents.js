import React, { Component } from 'react'

import { Link } from 'react-router-dom'

import { connect } from 'react-redux'
import { getAllStudents } from '../redux/reducers'

import Student from './Student'

class AllStudents extends Component {
  constructor(props) {
    super(props)
    this.fetchAllStudents = this.fetchAllStudents.bind(this)
  }

  async componentDidMount() {
    await this.fetchAllStudents()
  }

  async fetchAllStudents() {
    await this.props.getAllStudents()
  }

  render() {
    return (
      <div>
        <Link to='/'>Return Home</Link>
        <br />

        <h1>All Students Component</h1>

        {/* arrow function below resloves "props" from being undefined in fetchAllStudents, before: this.fetchAllStudents */}
        <button onClick={() => this.fetchAllStudents()}>Refresh</button>

        {this.props.students.students !== undefined ? (
          this.props.students.students.map((student, index) => (
            <Student
              key={index}
              id={student.id}
              studentname={student.studentname}
              email={student.email}
              image={student.image}
              gpa={student.gpa}
              CampusId={student.CampusId}
              deleteStudent={this.deleteStudent}
              fetchAllStudents={this.fetchAllStudents}
            />
          ))
        ) : (
          <p>Unable to fetch students</p>
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllStudents)
