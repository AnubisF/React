import React, { Component } from 'react'

export default class Position extends Component {
    constructor() {
        super();
        this.state = {
            lat: 0,
            lng: 0
        }
    }

    render() {
        const {lat,lng} = this.state;
        return (
            <div>
                <p>Position:{lat.toFixed(3)},{lng.toFixed(3)} </p>
            </div>
        )
    }
}

