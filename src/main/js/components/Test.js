import React, { Component } from 'react';
import CarList from './CarList.js'

class Test extends Component {
    constructor(props){
        super(props);
        this.state = {cars: []};
    }
    
    componentDidMount(){
        fetch(process.env.REACT_APP_BACKEND_URL +"api/cars", {
            method: 'GET',
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            },
        }).then(res => res.json())
        .then((result) =>{
            this.setState({cars: result.entity._embedded.cars});
        });

    }
    render() {
		return (
    <CarList cars = {this.state.cars}/>
    );
}
}

export default Test;