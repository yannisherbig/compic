import React, { Component } from 'react';
import Bilder from './Bilder'
import AddBild from './AddBild';

class BilderContainer extends Component {
    state = { 
        isLoading : true,
        bilder : [
            {id: 1, name: 'Top View of Valley Near Body of Water', url: 'https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'},
            {id: 2, name: 'Gray Bridge and Trees', url: 'https://images.pexels.com/photos/814499/pexels-photo-814499.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'}
        ]
    }

    // async componentDidMount(){
    //     const response = await fetch('/api/bilder');
    //     const body = await response.json();
    //     this.setState({Bilder : body, isLoading: false})
    // }
    deleteBild = (id) => {
        const bilder = this.state.bilder.filter(bild => {
            return bild.id !== id
        });
        this.setState({
            isLoading: false, 
            bilder
        })
    }

    addBild = (bild) => {
        bild.id = Math.random();
        bild.name = '';
        let bilder = [...this.state.bilder, bild];
        this.setState({
            bilder
        })
    }
    render() { 
        //const {bilder, isLoading} = this.state;
        // if(isLoading)
        //     return (<div>Lädt...</div>);
        return (  
            <div className="Bilder container">
                <h1 className="center blue-text">Bilder</h1>
                <AddBild addBild={this.addBild}/>
                <Bilder bilder={this.state.bilder} deleteBild={this.deleteBild} />
            </div>
        );
    }
}
 
export default BilderContainer;