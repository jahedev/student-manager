import React, { Component } from 'react'

import { Link } from 'react-router-dom'

import DeleteStudent from './DeleteStudent'

class Student extends Component {
  render() {
    const { id, first, last, email, image, gpa, CampusId } = this.props
    console.log(id, ':', first, last)
    return (
      <div>
        <Link to={`/singleStudent/${id}`}>
          Name: {first} {last}
        </Link>
        {/* Requirements just want student names displayed on all students */}
        {/* <p>Email: {email}</p> */}
        {/* <p>Image: {image}</p> */}
        {/* <p>GPA: {gpa}</p> */}
        {/* <p>CampusId: {CampusId}</p> */}
        <DeleteStudent id={id} CampusId={CampusId} />
      </div>
    )
  }
}

export default Student
