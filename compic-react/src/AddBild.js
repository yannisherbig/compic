import React, { Component } from 'react';

class AddBild extends Component {
    state = {  
        url: '',
        name: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
        console.log(this.state);
    }

    // handleSubmit = (e) => {
    //     e.preventDefault();
    //     this.props.addBild(this.state);
    //     this.setState({
    //         url: '',
    //         name: ''
    //     })
    // }

    handleValidation = () => {
        if(this.state.url == null || this.state.url == "" || !isUrl(this.state.url) || this.state.name == null || this.state.name == ""){
            return false;
        }
        return true;
    }


    handleSubmitButtonClick = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.props.addBild(this.state);
        this.setState({
            url: '',
            name: ''
        })
        console.log(this.state);
    }

    render() { 
        return ( 
            <div>
                <form>
                    <div className="input-field">
                        <i className="material-icons prefix">image</i>
                        <input data-error="wrong" data-success="right" className="validate" placeholder="Bild-URL" type="url" id="url" onChange={this.handleChange} onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault();}} value={this.state.url} />
                        <label htmlFor="url">Neues Bild hinzufügen</label>
                    </div>
                    <div className="input-field">
                        <i className="material-icons prefix">title</i>
                        <input data-error="wrong" data-success="right" className="validate" placeholder="Bild-Titel" type="text" id="name" onChange={this.handleChange} onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }} value={this.state.name} />
                    </div>      
                    <div className="input-field center">
                        <button className="btn" onClick={this.handleSubmitButtonClick}>Bild hinzufügen</button>
                    </div>
                </form>
            </div>
         );
    }
}
 
export default AddBild;