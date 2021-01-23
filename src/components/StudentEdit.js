import axios from 'axios'
import React, { Component } from 'react'

import { connect } from 'react-redux'
import { getStudentById } from '../redux/reducers'

class StudentEdit extends Component {
  constructor(props) {
    super(props)

    this.state = {
      studentId: '',
    }

    this.handleEdit = this.handleEdit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  async componentWillMount() {
    this.fetchStudentById(this.props.id)
  }

  fetchStudentById = async (studentId) => {
    await this.props.getStudentById(studentId)

    setTimeout(() => {
      console.log('student: ', this.props.student.student)
      // this.setState({
      //   id: this.props.student.student.id,
      //   email: this.props.student.student.email,
      //   image: this.props.student.student.image,
      //   gpa: this.props.student.student.gpa,
      //   CampusId: this.props.student.student.CampusId,
      // })
    }, 100)
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleEdit = () => {
    let edit = {}
    if (this.state.studentname !== undefined)
      edit.studentname = this.state.studentname
    if (this.state.email !== undefined) edit.email = this.state.email
    if (this.state.image !== undefined) edit.image = this.state.image
    if (this.state.gpa !== undefined) edit.gpa = this.state.gpa

    axios.put(
      `http://localhost:8080/api/students/${this.props.student.student.id}`,
      edit
    )

    this.props.editStudent(false)

    setTimeout(() => {
      this.props.updateAllStudents()
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

          <label>Name: </label>
          <input
            type='text'
            name='studentname'
            placeholder={studentname}
            onChange={(e) => this.handleChange(e)}
          />
          <br />

          <label>Email: </label>
          <input
            type='text'
            name='email'
            placeholder={email}
            onChange={(e) => this.handleChange(e)}
          />
          <br />

          <label>Photo: </label>
          <input
            type='text'
            name='image'
            placeholder={image}
            onChange={(e) => this.handleChange(e)}
          />
          <br />

          <label>GPA: </label>
          <input
            type='text'
            name='gpa'
            placeholder={gpa}
            onChange={(e) => this.handleChange(e)}
          />
          <br />
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
