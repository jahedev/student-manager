import React, { Component } from "react";
import axios from "axios";

class NewCampus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      address: "",

      imageurl:
        "https://www.wtvq.com/wp-content/uploads/2018/08/Snoop-Dogg.jpg",
      description: "",
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
      "http://localhost:8080/api/student/newCampus",
      this.state
    );
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              onChange={this.handleChange}
              type="text"
              name="name"
              value={this.state.name}
            />
          </label>
          <label>
            Address:
            <input
              type="text"
              name="address"
              onChange={this.handleChange}
              value={this.state.address}
            />
          </label>
          <label>
            Description:
            <input
              type="text"
              name="description"
              onChange={this.handleChange}
              value={this.state.description}
            />
            Image URL:
            <input
              type="text"
              name="imageurl"
              onChange={this.handleChange}
              value={this.state.imageurl}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default NewCampus;
