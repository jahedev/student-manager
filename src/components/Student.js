import axios from 'axios';
import React, { Component } from 'react';

class Student extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      id,
      studentname,
      email,
      image,
      gpa,
      CampusId,
      deleteStudent,
    } = this.props;
    console.log(id, ':', studentname);
    return (
      <div>
        <p>Name: {studentname}</p>
        <p>Email: {email}</p>
        <p>Image: {image}</p>
        <p>GPA: {gpa}</p>
        <p>CampusId: {CampusId}</p>
        <button type='button' onClick={() => deleteStudent(id)}>
          Delete {studentname}
        </button>
      </div>
    );
  }
}

export default Student;
