import React, { Component } from 'react'

class Campus extends Component {
  render() {
    const {
      id,
      campusname,
      image,
      address,
      description,
      deleteCampus,
    } = this.props
    return (
      <div>
        <p>Campus Name: {campusname}</p>
        <p>Image: {image}</p>
        <p>Address: {address}</p>
        <p>Description: {description}</p>
        <button type='button' onClick={() => deleteCampus(id)}>
          Delete {campusname}
        </button>
        <br />
      </div>
    )
  }
}

export default Campus
