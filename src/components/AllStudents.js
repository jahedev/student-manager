import React, { Component } from 'react';
import axios from 'axios';

import { connect } from 'react-redux';
import { getAllStudents } from '../redux/reducers';

import Student from './Student';

class AllStudents extends Component {
  constructor(props) {
    super(props);

    this.deleteStudent = this.deleteStudent.bind(this);
  }

  deleteStudent = (id) => {
    if (!id) return;

    axios.delete(`http://localhost:8080/api/students/${id}`, {
      data: { answer: 42 },
    });

    setTimeout(() => {
      this.fetchAllStudents();
    }, 200);

    console.log('ID: ', this.props.id, ' deleted');
  };

  // if we want all students to be displayed on button click only, comment out this function
  async componentDidMount() {
    await this.fetchAllStudents();
  }

  async fetchAllStudents() {
    await this.props.getAllStudents();
    setTimeout(() => {
      console.log(this.props.students);
    }, 10);
  }

  render() {
    return (
      <div>
        <h1>All Students Component</h1>

        {/* arrow function below resloves "props" being underfined in fetchAllStudents, before: this.fetchAllStudents */}
        <button onClick={() => this.fetchAllStudents()}>All Students</button>

        {this.props.students.students !== undefined ? (
          this.props.students.students.map((student, index) => (
            <Student
              key={index}
              id={student.id}
              studentname={student.studentname}
              email={student.email}
              image={student.image}
              gpa={student.gpa}
              CampusId={student.CampusId}
              deleteStudent={this.deleteStudent}
            />
          ))
        ) : (
          <br />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    students: state.students,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllStudents: () => dispatch(getAllStudents()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AllStudents);
