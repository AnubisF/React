import React, { Component } from 'react';
import "./Hr.css";

export default class Hr extends Component {
    constructor() {
        super();
        this.state = {
            ika: 0,
            alaraja: 0,
            ylaraja: 0
        }
    }

    handleChange = (event) => {
        this.setState({ika: event.target.value});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const ala = (220 - this.state.ika) * 0.65;
        const yla = (220 - this.state.ika) * 0.85;
        this.setState({alaraja: ala});
        this.setState({ylaraja: yla});
    }

    render() {
        const {alaraja, ylaraja, ika} = this.state;
        return (
            <div id="container">
                <h3>Tavoitesyke</h3>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Ikä</label>
                        <input value={ika} type="number" onChange={this.handleChange} />
                    </div>
                    <div>
                        <label>Tavoitesyke</label>
                        <output>{alaraja} - {ylaraja}</output>
                    </div>
                    <div>
                        <button>Calculate</button>
                    </div>
                </form>
            </div>
        )
    }
}