import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import '../css/homepage.css'

class Homepage extends Component {
  render() {
    return (
      <div className='container'>
        <div className='bg-whole'>
          <div className='middle-align'>
            <h1 className='homepage-header'>CRUD APPLICATION</h1>
            <h3 className='homepage-subtitle'>
              Team: Karim Nekzad, Marin Kocollari, M. Jahed Hossain, Hassan
              Akbar
            </h3>
          </div>
        </div>
      </div>
    )
  }
}

export default Homepage
