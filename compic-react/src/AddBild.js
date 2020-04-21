import React, { Component } from 'react';

class AddBild extends Component {
    state = {  
        url: ''
    }

    handleChange = (e) => {
        this.setState({
            url: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addBild(this.state);
        this.setState({
            url: ''
        })
    }

    render() { 
        return ( 
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="input-field">
                        <i className="material-icons prefix">image</i>
                        <input type="url" id="url" onChange={this.handleChange} value={this.state.url} />
                        <label htmlFor="url">Bild-URL</label>
                    </div>
                    <div className="input-field">
                        <i className="material-icons prefix">title</i>
                        <input type="text" id="name" onChange={this.handleChange} value={this.state.url} />
                        <label htmlFor="name">Bild-Name</label>
                    </div>
                </form>
            </div>
         );
    }
}
 
export default AddBild;