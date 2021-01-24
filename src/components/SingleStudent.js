import React, { Component } from "react"

import { connect } from "react-redux"
import {
  deleteStudent,
  getStudentById,
  updateStudent,
  getCampusById,
  getAllCampuses,
} from "../redux/reducers"
import { Link, Redirect } from "react-router-dom"

class SingleStudent extends Component {
  state = {
    redirect: false,
    editing: false,
    studentInfo: {
      id: this.props.match.params.id,
      first: this.props.student.first,
      last: this.props.student.last,
      email: this.props.student.email,
      image: this.props.student.image,
      gpa: this.props.student.gpa,
      CampusId: null,
    },
  }

  componentDidMount = async () => {
    await this.props.getStudentById(this.props.match.params.id)
    await this.props.getAllCampuses()
    setTimeout(() => {
      this.props.getCampusById(this.props.student.CampusId)
    }, 300)
  }

  handleSubmit = async () => {
    console.log("student to be deleted with id:", this.props.match.params.id)
    await this.props.deleteStudent(this.props.student.id)

    setTimeout(() => {
      this.setState({
        redirect: true,
      })
    }, 400)
  }

  handleSelectChange = (e) => {
    this.setState({
      studentInfo: {
        ...this.state.studentInfo,
        CampusId: e.target.value,
      },
    })
  }

  handleEditChange = (e) => {
    this.setState({
      studentInfo: {
        ...this.state.studentInfo,
        [e.target.name]: e.target.value,
      },
    })
  }

  handleEditSubmit = (e) => {
    e.preventDefault()

    if (!this.state.studentInfo.CampusId) {
      this.setState({
        studentInfo: {
          ...this.state.studentInfo,
          CampusId: null,
        },
      })
    } else {
      setTimeout(() => {
        this.props.getCampusById(this.state.studentInfo.CampusId)
      }, 100)
    }

    setTimeout(() => {
      console.log("DATA SENDING AS UPDATE INFO:", this.state.studentInfo)
      this.props.updateStudent(this.state.studentInfo)
    }, 200)

    // need to re-get student to rerender component to show updated info
    setTimeout(() => {
      this.props.getStudentById(this.props.match.params.id)
    }, 400)

    setTimeout(() => {
      this.setState({
        editing: false,
      })
    }, 600)
  }

  render() {
    console.log("this.props.campuses:", this.props.campuses)
    if (this.state.redirect === true) {
      return <Redirect to="/allStudents" />
    }
    console.log("url param id:", this.props.match.params.id)

    if (!this.state.editing) {
      return (
        <div>
          <Link to="/allStudents">All Students</Link>
          <br />
          <Link to="/">Return Home</Link>
          <br />

          <div>
            <button onClick={() => this.handleSubmit()}>Delete student</button>
          </div>
          {this.props.student !== undefined ? (
            <div>
              <p>
                Name: {this.props.student.first} {this.props.student.last}
              </p>
              <p>Email: {this.props.student.email}</p>
              <p>Image: {this.props.student.image}</p>
              <p>GPA: {this.props.student.gpa}</p>
              <div>
                {this.props.student.CampusId === null ? (
                  <div>
                    <p>This student is not enrolled in a campus.</p>
                  </div>
                ) : (
                  <Link to={`/singleCampus/${this.props.student.CampusId}`}>
                    Campus: {this.props.campus.campusname}
                  </Link>
                )}
              </div>
            </div>
          ) : (
            <br />
          )}

          <div>
            <button
              onClick={() =>
                this.setState({
                  editing: true,
                  studentInfo: {
                    ...this.state.studentInfo,
                    CampusId: null,
                  },
                })
              }
            >
              Edit Student
            </button>
          </div>
        </div>
      )
    } else {
      return (
        <div>
          {/* edit form */}
          <form>
            <div>
              <label>
                First:
                <input
                  type="text"
                  name="first"
                  placeholder={this.props.student.first}
                  onChange={(e) => this.handleEditChange(e)}
                />
              </label>
            </div>

            <div>
              <label>
                Last:
                <input
                  type="text"
                  name="last"
                  placeholder={this.props.student.last}
                  onChange={(e) => this.handleEditChange(e)}
                />
              </label>
            </div>

            <div>
              <label>
                Email:
                <input
                  type="email"
                  name="email"
                  placeholder={this.props.student.email}
                  onChange={(e) => this.handleEditChange(e)}
                />
              </label>
            </div>

            <div>
              <label>
                Image:
                <input
                  type="text"
                  name="image"
                  placeholder={this.props.student.image}
                  onChange={(e) => this.handleEditChange(e)}
                />
              </label>
            </div>

            <div>
              <label>
                GPA:
                <input
                  type="number"
                  step="0.01"
                  name="gpa"
                  placeholder={this.props.student.gpa}
                  onChange={(e) => this.handleEditChange(e)}
                />
              </label>
            </div>

            <div>
              <select
                name="campusSelect"
                onChange={(e) => this.handleSelectChange(e)}
              >
                <option value="">--Select a campus--</option>
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

            <div>
              <button onClick={() => this.setState({ editing: false })}>
                Cancel
              </button>
            </div>

            <div>
              <input
                type="submit"
                value="Submit"
                onClick={(e) => this.handleEditSubmit(e)}
              />
            </div>
          </form>
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    student: state.student,
    campus: state.campus,
    campuses: state.campuses,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getStudentById: (searchStudentId) =>
      dispatch(getStudentById(searchStudentId)),
    deleteStudent: (deleteStudentId) =>
      dispatch(deleteStudent(deleteStudentId)),
    updateStudent: (studentInfo) => dispatch(updateStudent(studentInfo)),
    getCampusById: (searchCampusId) => dispatch(getCampusById(searchCampusId)),
    getAllCampuses: () => dispatch(getAllCampuses()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleStudent)
