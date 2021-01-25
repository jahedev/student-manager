import React, { Component } from "react"

import { Link } from "react-router-dom"

import { connect } from "react-redux"
import { getAllCampuses } from "../redux/reducers"

import Campus from "./Campus"
import CreateCampus from "./CreateCampus"

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
    if (this.props.campuses.length === 0) {
      return (
        <div className="container">
          <div className="half-bg-campuses"></div>
          <div className="no-campuses">
            <div>
              <p>There are no campuses! Try adding one</p>
              <div>
                <button
                  onClick={() =>
                    this.setState({ addingCampus: !this.state.addingCampus })
                  }
                  className="addCampusButton"
                >
                  Add Campus
                </button>
              </div>
              {this.state.addingCampus === true ? (
                <div>
                  <CreateCampus />
                  <div>
                    <button
                      onClick={() => this.setState({ addingCampus: false })}
                    >
                      Cancel Addition
                    </button>
                    <br />
                    <br />
                  </div>
                </div>
              ) : (
                <br />
              )}
            </div>
          </div>
        </div>
      )
    }
    return (
      <div className="container">
        <div className="half-bg-campuses"></div>

        <h1>All Campuses Component</h1>

        <div>
          <button
            onClick={() =>
              this.setState({ addingCampus: !this.state.addingCampus })
            }
            className="addCampusButton"
          >
            Add Campus
          </button>
        </div>
        {this.state.addingCampus === true ? (
          <div>
            <CreateCampus />
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
              Students={campus.Students}
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
