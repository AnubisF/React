import React, { Component } from 'react'

export default class Toggle extends Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true}
    }

    handleClick = () => {
        this.setState(prevState => ({isToggleOn: !prevState.isToggleOn}))

        if (this.state.isToggleOn) {
            this.props.stop();
        } else {
            this.props.start();
        }
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? "Stop" : "Start"}
            </button>
        )
    }
}
