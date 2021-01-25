import React, { Component } from 'react'

import { Link } from 'react-router-dom'

import { connect } from 'react-redux'
import { getAllStudents } from '../redux/reducers'

import Student from './Student'
import CreateStudent from './CreateStudent'
import HalfHeaderBG from './HalfHeaderBG'

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
      <div className='container'>
        <HalfHeaderBG imgdiv='half-bg-students' title='All Students' />
        <div>
          <button
            className='green-btn'
            onClick={() =>
              this.setState({ addingStudent: !this.state.addingStudent })
            }
          >
            Add Student
          </button>
        </div>
        {this.state.addingStudent === true ? (
          <div>
            <CreateStudent showHeader={false} />
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
            <div className='student-container' key={index}>
              <Student
                id={student.id}
                first={student.first}
                last={student.last}
                email={student.email}
                image={student.image}
                gpa={student.gpa}
                CampusId={student.CampusId}
              />
              <br />
              <br />
            </div>
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
