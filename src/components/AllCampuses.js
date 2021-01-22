import React, { Component } from "react"

import { connect } from "react-redux"
import { getAllCampuses } from "../redux/reducers"

import Campus from "./Campus"

class AllCampuses extends Component {

    async componentDidMount() {
        await this.fetchAllCampuses()
    }

    async fetchAllCampuses(){
        await this.props.getAllCampuses()
        setTimeout(() => {
            console.log(this.props.campuses)
        }, 200)
    }

    render(){
        return (
            <div>
                <h1>All Campuses Component</h1>
                
                <button onClick={() => this.fetchAllCampuses()}>All Campuses</button>
                 {this.props.campuses.campuses !== undefined ?(
                    this.props.campuses.campuses.map((campus, index) => (
                    <Campus
                        key={index}
                        name={campus.name}
                        image={campus.image}
                        address={campus.address}
                        description={campus.description}
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
    return{
        campuses: state.campuses,
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        getAllCampuses: () => dispatch(getAllCampuses()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllCampuses)