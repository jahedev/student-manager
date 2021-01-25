import React, { Component } from "react"

import { Link } from "react-router-dom"
import AllStudents from "./AllStudents"

import DeleteCampus from "./DeleteCampus"
import Student from "./Student"

class Campus extends Component {
  render() {
    const { id, campusname, image, address, description, Students } = this.props
    return (
      <div className="campus">
        <DeleteCampus CampusId={id}/>
        <Link to={`/singleCampus/${id}`}
         className="campusNames">{campusname}
        <p className="description">{description}</p>
        <div>{}</div></Link>
        <img src={image} className="campusImages"/>
        {/* Requirements just want campus name and image displayed on all campuses */}
        {/* <p>Address: {address}</p> */}
        {/* <p>Description: {description}</p> */}
      </div>
    )
  }
}

export default Campus
