import React, { Component } from "react"

class Campus extends Component {
    render(){
        const{ name, image, address, description} = this.props
        return (
            <div>
                <p>Name: {name}</p>
                <p>Image: {image}</p>
                <p>Address: {address}</p>
                <p>Description: {description}</p>
            </div>
        )
    }
}

export default Campus