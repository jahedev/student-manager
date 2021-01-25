import React, { Component } from "react"

import { Link } from "react-router-dom"

import DeleteCampus from "./DeleteCampus"

class Campus extends Component {
  render() {
    const { id, campusname, image, address, description, Students } = this.props
    return (
      <div>
        <Link to={`/singleCampus/${id}`}>Campus Name: {campusname}</Link>
        <p>Image: {image}</p>
        {/* Requirements just want campus name and image displayed on all campuses */}
        {/* <p>Address: {address}</p> */}
        {/* <p>Description: {description}</p> */}
        <DeleteCampus CampusId={id} />
      </div>
    )
  }
}

export default Campus
