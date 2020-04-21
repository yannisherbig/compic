import React, { Component } from 'react';

class Kategorie extends Component {
    state = { 
        isLoading : true,
        Kategorien : []
    }

    async componentDidMount(){
        const response = await fetch('/api/kategorien')
    }
    render() { 
        return (  );
    }
}

export default Kategorie;