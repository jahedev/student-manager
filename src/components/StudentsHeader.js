import React, { Component } from 'react'

export default class StudentsHeader extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='half-bg-students'>
        <div className='middle-align'>
          <h1>{this.props.title}</h1>
        </div>
      </div>
    )
  }
}
