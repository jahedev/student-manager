import React, { Component } from 'react'

import { Link, Redirect } from 'react-router-dom'

import { connect } from 'react-redux'
import { createCampus } from '../redux/reducers'
import HalfHeaderBG from './HalfHeaderBG'

class CreateCampus extends Component {
  state = {
    redirect: false,
    campusInfo: {
      campusname: '',
      image: '',
      address: '',
      description: '',
    },
  }

  handleChange = (e) => {
    this.setState({
      campusInfo: {
        ...this.state.campusInfo,
        [e.target.name]: e.target.value,
      },
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const { campusname, image, address, description } = this.state.campusInfo
    if (!campusname || !image || !address || !description) {
      console.warn(
        'Please enter a value for all required (*) fields: campusname, image, address, description'
      )
      return
    }

    this.props.createCampus(this.state.campusInfo)

    setTimeout(() => {
      this.setState({ redirect: true })
    }, 500)
  }

  render() {
    if (this.state.redirect === true) {
      return <Redirect to={`/singleCampus/${this.props.campus.id}`} />
    }

    let HEADER = (
      <HalfHeaderBG imgdiv='half-bg-campuses' title='Create A Campus' />
    )
    if (this.props.showHeader === false) HEADER = ''

    return (
      <div className='container'>
        {HEADER}

        <form className='createForm' onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <label>Name:</label>
            <input
              type='text'
              name='campusname'
              onChange={(e) => this.handleChange(e)}
            />
          </div>

          <div>
            <label>Image:</label>
            <input
              type='text'
              name='image'
              onChange={(e) => this.handleChange(e)}
            />
          </div>

          <div>
            <label>Address:</label>
            <input
              type='text'
              name='address'
              onChange={(e) => this.handleChange(e)}
            />
          </div>

          <div>
            <label>Description:</label>
            <input
              type='text'
              name='description'
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <br />
          <div>
            <input className='btn create-btn' type='submit' value='Submit' />
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    campus: state.campus,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createCampus: (campusInfo) => dispatch(createCampus(campusInfo)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateCampus)
