import React, { Component } from 'react'
import axios from 'axios'

import { connect } from 'react-redux'
import { getAllCampuses } from '../redux/reducers'

import Campus from './Campus'

class AllCampuses extends Component {
  constructor(props) {
    super(props)
    this.deleteCampus = this.deleteCampus.bind(this)
  }

  deleteCampus = (id) => {
    if (!id) return

    axios.delete(`http://localhost:8080/api/campuses/${id}`, {
      data: {},
    })

    setTimeout(() => {
      this.fetchAllCampuses()
    }, 100)

    console.log('Campus ID: ', this.props.id, ' deleted.')
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
      <div>
        <h1>All Campuses Component</h1>

        <button onClick={() => this.fetchAllCampuses()}>All Campuses</button>
        {this.props.campuses.campuses !== undefined ? (
          this.props.campuses.campuses.map((campus, index) => (
            <Campus
              key={index}
              id={campus.id}
              campusname={campus.campusname}
              image={campus.image}
              address={campus.address}
              description={campus.description}
              deleteCampus={this.deleteCampus}
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
