import React, { Component } from 'react'

import { connect } from 'react-redux'
import { getStudentById } from '../redux/reducers'

class StudentEdit extends Component {
  constructor(props) {
    super(props)

    this.state = {
      studentId: '',
    }
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
          <input type='text' placeholder={studentname} />
          <br />

          <label>Email: </label>
          <input type='text' placeholder={email} />
          <br />

          <label>Photo: </label>
          <input type='text' placeholder={image} />
          <br />

          <label>CampusId: </label>
          <input type='text' placeholder={CampusId} />
          <br />
          <br />
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
