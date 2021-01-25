import React, { Component } from 'react'

import { Link } from 'react-router-dom'

import { connect } from 'react-redux'
import { getAllCampuses } from '../redux/reducers'

import Campus from './Campus'
import CreateCampus from './CreateCampus'
import HalfHeaderBG from './HalfHeaderBG'

class AllCampuses extends Component {
  state = {
    addingCampus: false,
  }

  async componentDidMount() {
    await this.fetchAllCampuses()
  }

  async fetchAllCampuses() {
    await this.props.getAllCampuses()
    setTimeout(() => {
      console.log(this.props.campuses)
    }, 200)
  }

  render() {
    return (
      <div className='container'>
        <HalfHeaderBG imgdiv='half-bg-campuses' title='All Campuses' />

        <div>
          <button
            className='green-btn'
            onClick={() =>
              this.setState({ addingCampus: !this.state.addingCampus })
            }
          >
            Add Campus
          </button>
        </div>
        {this.state.addingCampus === true ? (
          <div>
            <CreateCampus showHeader={false} />
            <div>
              <button onClick={() => this.setState({ addingCampus: false })}>
                Cancel Addition
              </button>
              <br />
              <br />
            </div>
          </div>
        ) : (
          <br />
        )}

        {this.props.campuses !== undefined ? (
          this.props.campuses.map((campus, index) => (
            <Campus
              key={index}
              id={campus.id}
              campusname={campus.campusname}
              image={campus.image}
              address={campus.address}
              description={campus.description}
            />
          ))
        ) : (
          <span />
        )}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    campuses: state.campuses,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAllCampuses: () => dispatch(getAllCampuses()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllCampuses)
