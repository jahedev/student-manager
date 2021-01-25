import React, { Component } from 'react'

import { Link } from 'react-router-dom'

import DeleteStudent from './DeleteStudent'

class Student extends Component {
  render() {
    const { id, first, last, email, image, gpa, CampusId } = this.props
    console.log(id, ':', first, last)
    return (
      <div className='center-text'>
        <div className='imgwrapper'>
          <img alt='Student Image' src={image} className='studentImages' />
        </div>
        <Link className='student-link' to={`/singleStudent/${id}`}>
          {first} {last}
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
