import React, { Component } from "react"

import { Link } from "react-router-dom"

import DeleteCampus from "./DeleteCampus"

class Campus extends Component {
  render() {
    const { id, campusname, image, address, description } = this.props
    return (
      <div>
        <DeleteCampus CampusId={id} />
        <Link to={`/singleCampus/${id}`}>Campus Name: {campusname}</Link>
        <img src={image} width="20%" height="auto"/>
        {/* Requirements just want campus name and image displayed on all campuses */}
        {/* <p>Address: {address}</p> */}
        {/* <p>Description: {description}</p> */}
      </div>
    )
  }
}

export default Campus
