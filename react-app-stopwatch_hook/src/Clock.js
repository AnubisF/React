import React, { Component } from 'react'
import Toggle from './Toggle';

export default class Clock extends Component {
    constructor() {
        super();
        this.state = {seconds: 0}
    }

    componentDidMount() {
        this.start();
    }

    componentWillUnmount() {
        this.stop();
    }

    start = () => {
        this.timerId = setInterval(() => this.tick(), 1000);
    }

    stop = () => {
        this.setState({seconds: 0});
        clearInterval(this.timerId);
    }

    tick = () => {
        this.setState(prevState => ({seconds: prevState.seconds + 1}))
    }

    render() {
        return (
            <div>
                <p>{this.state.seconds}</p>
                <Toggle start={this.start} stop={this.stop}/>
            </div>
        )
    }
}
