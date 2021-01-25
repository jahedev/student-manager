import React, { Component } from 'react'

import { connect } from 'react-redux'
import { deleteCampus, getAllCampuses } from '../redux/reducers'

class DeleteCampus extends Component {
  handleDelete = () => {
    console.log('campus to be deleted with id:', this.props.CampusId)
    this.props.deleteCampus(this.props.CampusId)

    setTimeout(() => {
      this.props.getAllCampuses()
    }, 300)
  }

  render() {
    return (
      <div>
        <button onClick={() => this.handleDelete()} className='red-btn'>
          Delete Campus
        </button>
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
    deleteCampus: (deleteCampusId) => dispatch(deleteCampus(deleteCampusId)),
    getAllCampuses: () => dispatch(getAllCampuses()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteCampus)
