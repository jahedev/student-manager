import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
  render() {
    return (
      <div className='navbar'>
        <div className='logo'>
          <Link to='/'>Student Manager</Link>
        </div>
        <div className='links'>
          <Link to='/allStudents'>All Students</Link>
          <Link to='/allCampuses'>All Campuses</Link>
          <Link to='/createStudent'>Create Student</Link>
          <Link to='/createCampus'>Create Campus</Link>
        </div>
      </div>
    )
  }
}
