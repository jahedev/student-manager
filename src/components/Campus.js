import React, { Component } from "react"

import { Link } from "react-router-dom"

class Campus extends Component {
  render() {
    const { id, campusname, image, address, description } = this.props
    return (
      <div>
        <Link to={`/singleCampus/${id}`}>Campus Name: {campusname}</Link>
        <p>Image: {image}</p>
        <p>Address: {address}</p>
        <p>Description: {description}</p>
      </div>
    )
  }
}

export default Campus
