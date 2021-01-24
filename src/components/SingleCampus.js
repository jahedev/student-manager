import React, { Component } from "react"

import { Link } from "react-router-dom"

import { connect } from "react-redux"
import { getCampusById, updateCampus } from "../redux/reducers"

import Student from "./Student"

class SingleCampus extends Component {
  state = {
    editing: false,
    campusInfo: {
      id: this.props.match.params.id, // id from url
      campusname: this.props.campus.campusname,
      image: this.props.campus.image,
      address: this.props.campus.address,
      description: this.props.campus.description,
    },
  }

  componentDidMount = async () => {
    await this.props.getCampusById(this.props.match.params.id)
  }

  handleEditChange = (e) => {
    this.setState({
      campusInfo: {
        ...this.state.campusInfo,
        [e.target.name]: e.target.value,
      },
    })
  }

  handleEditSubmit = (e) => {
    e.preventDefault()

    this.props.updateCampus(this.state.campusInfo)

    setTimeout(() => {
      this.props.getCampusById(this.props.match.params.id)
    }, 300)

    setTimeout(() => {
      this.setState({
        editing: false,
      })
    }, 600)
  }

  render() {
    console.log("Students of campus:", this.props.campus.Students)
    if (!this.state.editing) {
      return (
        <div>
          <Link to="/allCampuses">All Campuses</Link>
          <br />
          <Link to="/">Return Home</Link>
          <br />

          <p>single campus component</p>

          {this.props.campus !== undefined ? (
            <div>
              <p>Name: {this.props.campus.campusname}</p>
              <p>Image: {this.props.campus.image}</p>
              <p>Address: {this.props.campus.address}</p>
              <p>Description: {this.props.campus.description}</p>
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

          <button onClick={() => this.setState({ editing: true })}>Edit</button>
        </div>
      )
    } else {
      return (
        <div>
          <form onSubmit={(e) => this.handleEditSubmit(e)}>
            <div>
              <label>
                Name:
                <input
                  type="text"
                  name="campusname"
                  placeholder={this.props.campus.campusname}
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
                  placeholder={this.props.campus.image}
                  onChange={(e) => this.handleEditChange(e)}
                />
              </label>
            </div>

            <div>
              <label>
                Address:
                <input
                  type="text"
                  name="address"
                  placeholder={this.props.campus.address}
                  onChange={(e) => this.handleEditChange(e)}
                />
              </label>
            </div>

            <div>
              <label>
                Description:
                <input
                  type="text"
                  name="description"
                  placeholder={this.props.campus.description}
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
              <input type="submit" value="Submit" />
            </div>
          </form>
        </div>
      )
    }
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
    updateCampus: (campusInfo) => dispatch(updateCampus(campusInfo)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleCampus)
