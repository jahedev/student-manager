import React, { Component } from 'react'

export default class HalfHeaderBG extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className={this.props.imgdiv}>
        <div className='middle-align'>
          <h1>{this.props.title}</h1>
        </div>
      </div>
    )
  }
}
