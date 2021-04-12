import React from "react";

export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: ''
        }
    }

    handleSubmit = (event) => {
        this.props.add(this.state.title, this.state.description);
        this.setState ({
            title: '',
            description: ''
        })
        event.preventDefault();
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <div className = "col-12 col-md-3 col-form-label">
                        <label>Title</label>
                        <input className="form-control" name= 'title' value={this.state.title} onChange={this.handleChange}/>
                    </div>
                    <div className = "col-12 col-md-3 col-form-label">
                        <label>Description</label>
                        <textarea className="form-control" name= 'description' value={this.state.description} onChange={this.handleChange}></textarea>
                    </div>
                    <button className = "btn btn-primary btn-sm mt-3 mb-4">Add</button>
                </form>
            </div>
        )
    }
}