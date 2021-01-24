import React, { Component } from "react"

import { connect } from "react-redux"
import { deleteStudent, getStudentById, updateStudent } from "../redux/reducers"
import { Link, Redirect } from "react-router-dom"

class SingleStudent extends Component {
  state = {
    redirect: false,
    editing: false,
    studentInfo: {
      id: this.props.match.params.id,
      studentname: this.props.student.studentname,
      email: this.props.student.email,
      image: this.props.student.image,
      gpa: this.props.student.gpa,
      CampusId: null,
    },
  }

  componentDidMount = async () => {
    await this.props.getStudentById(this.props.match.params.id)
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

    // if (!this.state.studentInfo.CampusId) {
    //   delete this.state.studentInfo.CampusId
    // }

    if (!this.state.studentInfo.CampusId) {
      this.setState({
        studentInfo: {
          ...this.state.studentInfo,
          CampusId: null,
        },
      })
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
              <p>Name: {this.props.student.studentname}</p>
              <p>Email: {this.props.student.email}</p>
              <p>Image: {this.props.student.image}</p>
              <p>GPA: {this.props.student.gpa}</p>
              <Link to={`/singleCampus/${this.props.student.campusId}`}>
                CampusId: {this.props.student.CampusId}
              </Link>
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
              Edit
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
                Name:
                <input
                  type="text"
                  name="studentname"
                  placeholder={this.props.student.studentname}
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
              <label>
                CampusId:
                <input
                  type="number"
                  name="CampusId"
                  placeholder={this.props.student.CampusId}
                  onChange={(e) => this.handleEditChange(e)}
                />
              </label>
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
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getStudentById: (searchStudentId) =>
      dispatch(getStudentById(searchStudentId)),
    deleteStudent: (deleteStudentId) =>
      dispatch(deleteStudent(deleteStudentId)),
    updateStudent: (studentInfo) => dispatch(updateStudent(studentInfo)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleStudent)
