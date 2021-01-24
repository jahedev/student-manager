import React, { Component } from "react"

import { Link } from "react-router-dom"

import { connect } from "react-redux"
import { createCampus } from "../redux/reducers"

class CreateCampus extends Component {
  state = {
    campusInfo: {
      campusname: "",
      image: "",
      address: "",
      description: "",
    },
  }

  handleChange = (e) => {
    this.setState({
      campusInfo: {
        ...this.state.campusInfo,
        [e.target.name]: e.target.value,
      },
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const { campusname, image, address, description } = this.state.campusInfo
    if (!campusname || !image || !address || !description) {
      console.warn(
        "Please enter a value for all required (*) fields: campusname, image, address, description"
      )
      return
    }

    this.props.createCampus(this.state.campusInfo)
  }

  render() {
    return (
      <div>
        <Link to="/">Return Home</Link>
        <br />

        <p>create campus component</p>

        <form onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <label>
              Name:
              <input
                type="text"
                name="campusname"
                onChange={(e) => this.handleChange(e)}
              />
            </label>
          </div>

          <div>
            <label>
              Image:
              <input
                type="text"
                name="image"
                onChange={(e) => this.handleChange(e)}
              />
            </label>
          </div>

          <div>
            <label>
              Address:
              <input
                type="text"
                name="address"
                onChange={(e) => this.handleChange(e)}
              />
            </label>
          </div>

          <div>
            <label>
              Description:
              <input
                type="text"
                name="description"
                onChange={(e) => this.handleChange(e)}
              />
            </label>

            <div>
              <input type="submit" value="Submit" />
            </div>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    createCampus: (campusInfo) => dispatch(createCampus(campusInfo)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateCampus)
