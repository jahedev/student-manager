import axios from 'axios'
import React, { Component } from 'react'

import { connect } from 'react-redux'
import { getStudentById } from '../redux/reducers'

class StudentEdit extends Component {
  constructor(props) {
    super(props)

    this.handleEdit = this.handleEdit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  async componentWillMount() {
    await this.props.getStudentById(this.props.id)
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleEdit = () => {
    let changedStudent = {}

    if (this.state.studentname !== undefined)
      changedStudent.studentname = this.state.studentname
    if (this.state.email !== undefined) changedStudent.email = this.state.email
    if (this.state.image !== undefined) changedStudent.image = this.state.image
    if (this.state.gpa !== undefined) changedStudent.gpa = this.state.gpa

    axios.put(
      `http://localhost:8080/api/students/${this.props.student.student.id}`,
      changedStudent
    )

    // turn off editing mode
    this.props.editStudent(false)

    setTimeout(() => {
      this.props.fetchAllStudents()
    }, 200)
  }

  render() {
    let returnJSX = ''
    if (this.props.student.student === undefined)
      returnJSX = <h3>Unable to Edit Student</h3>
    else {
      const {
        id,
        studentname,
        email,
        image,
        gpa,
        CampusId,
      } = this.props.student.student

      returnJSX = (
        <div>
          <br />
          <h3>Edit Student '{studentname}'</h3>
          <div className='edit-form'>
            <div className='edit-form-item'>
              <label>Name: </label>
              <input
                type='text'
                name='studentname'
                placeholder={studentname}
                onChange={(e) => this.handleChange(e)}
              />
            </div>
            <div className='edit-form-item'>
              <label>Email: </label>
              <input
                type='text'
                name='email'
                placeholder={email}
                onChange={(e) => this.handleChange(e)}
              />
            </div>
            <div className='edit-form-item'>
              <label>Photo: </label>
              <input
                type='text'
                name='image'
                placeholder={image}
                onChange={(e) => this.handleChange(e)}
              />
            </div>
            <div className='edit-form-item'>
              <label>GPA: </label>
              <input
                type='text'
                name='gpa'
                placeholder={gpa}
                onChange={(e) => this.handleChange(e)}
              />
            </div>
          </div>
          <br />
          <button onClick={this.handleEdit}>Save Changes</button>
          <button onClick={() => this.props.editStudent(false)}>
            Cancel Changes
          </button>
        </div>
      )
    }
    return <div className='edit-student-view'>{returnJSX}</div>
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentEdit)
