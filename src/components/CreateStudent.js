import React, { Component } from 'react'

import { Link, Redirect } from 'react-router-dom'

import {
  createStudent,
  getCampusById,
  getStudentById,
  getAllCampuses,
} from '../redux/reducers'

import { connect } from 'react-redux'
import HalfHeaderBG from './HalfHeaderBG'

import validateEmail from '../helper/validateEmail'

class CreateStudent extends Component {
  state = {
    redirect: false,
    studentInfo: {
      first: '',
      last: '',
      email: '',
      image: '',
      gpa: '',
      CampusId: '',
    },
  }

  componentDidMount = async () => {
    await this.props.getAllCampuses()
  }

  handleSelectChange = (e) => {
    this.setState({
      studentInfo: {
        ...this.state.studentInfo,
        CampusId: e.target.value,
      },
    })
  }

  handleChange = (e) => {
    this.setState({
      studentInfo: {
        ...this.state.studentInfo,
        [e.target.name]: e.target.value,
      },
    })
  }

  handleSubmit = (e) => {
    console.log('CAMPUS ID IN SUBMIT FUNCT:', this.state.CampusId)
    e.preventDefault()

    if (!validateEmail(this.state.studentInfo.email)) {
      alert('That is not a valid email.')
      return
    }

    const { first, last, email, image, gpa, CampusId } = this.state.studentInfo
    if (!first || !last || !email || !image || !gpa) {
      console.warn(
        'Please enter a value for all required (*) fields: studentname, email, image, gpa'
      )
      return
    }

    // remove object property because backend won't accept empty property
    if (!CampusId) {
      delete this.state.studentInfo.CampusId
    }

    setTimeout(() => {
      this.props.createStudent(this.state.studentInfo)
    }, 300)

    // sets campus state to created student's campus so that campus redirect works in single student view after creation
    setTimeout(() => {
      this.props.getCampusById(this.props.student.CampusId)
    }, 600)

    setTimeout(() => {
      this.setState({ redirect: true })
    }, 800)
  }

  render() {
    if (this.state.redirect === true) {
      return <Redirect to={`/singleStudent/${this.props.student.id}`} />
    }

    let HEADER = (
      <HalfHeaderBG imgdiv='half-bg-students' title='Create A Student' />
    )
    if (this.props.showHeader === false) HEADER = ''

    return (
      <div className='container'>
        {HEADER}
        <form className='createForm' onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <label>First:</label>
            <input
              type='text'
              name='first'
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <div>
            <label>Last:</label>
            <input
              type='text'
              name='last'
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type='email'
              name='email'
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <div>
            <label>Image:</label>
            <input
              type='text'
              name='image'
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <div>
            <label>GPA:</label>
            <input
              type='number'
              step='0.01'
              name='gpa'
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <div>
            <label>Campus:</label>
            <select
              name='campusSelect'
              onChange={(e) => this.handleSelectChange(e)}
            >
              <option value=''>--Select a campus--</option>
              {this.props.campuses !== undefined ? (
                this.props.campuses.map((campus, index) => (
                  <option key={index} value={campus.id}>
                    {campus.campusname}
                  </option>
                ))
              ) : (
                <span />
              )}
            </select>
          </div>
          <br />
          <div>
            <input className='btn create-btn' type='submit' value='Submit' />
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    student: state.student,
    // needed for redirect, set to created student's campus on creation
    campus: state.campus,
    campuses: state.campuses,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createStudent: (studentInfo) => dispatch(createStudent(studentInfo)),
    getStudentById: (searchStudentId) =>
      dispatch(getStudentById(searchStudentId)),
    getCampusById: (searchCampusId) => dispatch(getCampusById(searchCampusId)),
    getAllCampuses: () => dispatch(getAllCampuses()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateStudent)
