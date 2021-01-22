// add folders?
import React, { Component } from "react";
import axios from "axios";

import { connect } from "react-redux";
import { createNewStudents } from "../redux/reducers";

import Student from "./Student";

class NewStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentname: "",

      email: "",
      gpa: "0",
      image: "https://www.wtvq.com/wp-content/uploads/2018/08/Snoop-Dogg.jpg",
      campusID: "0",
    };
  }
  // campus id?
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    console.log("I have sent");
    const student = await axios.post(
      "http://localhost:8080/api/students/newStudent",
      this.state
    );
  };

  // maybe /newStudent  ?
  // student_controller ?

  // is the url wrong?

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            First Name:
            <input
              onChange={this.handleChange}
              type="text"
              name="studentname"
              value={this.state.studentname}
            />
          </label>

          <label>
            Email:
            <input
              type="email"
              name="email"
              onChange={this.handleChange}
              value={this.state.email}
            />
            GPA:
            <input
              type="number"
              name="gpa"
              onChange={this.handleChange}
              value={this.state.gpa}
            />
            Image URL:
            <input
              type="text"
              name="imageurl"
              onChange={this.handleChange}
              value={this.state.image}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default NewStudent;

{
  // make campus id optional?
  // maybe campus id causing problems?
  // Campus ID:
  //           <input
  //             type="number"
  //             name="campusID"
  //             onChange={this.handleChange}
  //             value={this.state.campusID}
  //           />
  // <label>
  //           Last Name:
  //           <input
  //             type="text"
  //             name="lastname"
  //             onChange={this.handleChange}
  //             value={this.state.lastname}
  //           />
  //         </label>
}
