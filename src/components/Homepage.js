import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

class Homepage extends Component {
  render() {
    return (
      <div className='container'>
        <Navbar />
        <div className='bg-whole'></div>
      </div>
    )
  }
}

export default Homepage
