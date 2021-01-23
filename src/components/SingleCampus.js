import React, { Component } from "react"

import { Link } from "react-router-dom"

import { connect } from "react-redux"
import { getCampusById } from "../redux/reducers"

import Student from "./Student"

class SingleCampus extends Component {
  componentDidMount = async () => {
    await this.props.getCampusById(this.props.match.params.id)
  }

  render() {
    console.log("Students of campus:", this.props.campus.Students)
    return (
      <div>
        <Link to="/">Return Home</Link>
        <p>single campus component</p>

        {this.props.campus !== undefined ? (
          <div>
            <p>Name: {this.props.campus.campusname}</p>
            <p>Image: {this.props.campus.image}</p>
            <div>
              Students: <br />
              {this.props.campus.Students !== undefined ? (
                this.props.campus.Students.map((student, index) => (
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
          </div>
        ) : (
          <br />
        )}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    campus: state.campus,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCampusById: (searchCampusId) => dispatch(getCampusById(searchCampusId)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleCampus)
