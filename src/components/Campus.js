import React, { Component } from "react"

import { Link } from "react-router-dom"

import DeleteCampus from "./DeleteCampus"

class Campus extends Component {
  render() {
    const { id, campusname, image, address, description, Students } = this.props
    return (
      <div className="campus">
        <Link to={`/singleCampus/${id}`} className="campusNames">
          {campusname}
          <p className="description">{description}</p>
        </Link>
        <img src={image} className="campusImages" />
        <div className="totalStudents">Students: {Students.length}</div>
        {/* Requirements just want campus name and image displayed on all campuses */}
        {/* <p>Address: {address}</p> */}
        {/* <p>Description: {description}</p> */}
        <DeleteCampus CampusId={id} />
      </div>
    )
  }
}

export default Campus
