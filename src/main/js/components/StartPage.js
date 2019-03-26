import React, { Component } from 'react';
import './StartPage.css';
import logo from '../Resources/drivingElephant.png';
import RentalForm from './RentalForm.js';
import ReturnForm from './ReturnForm.js';

class StartPage extends Component{
    state = {
    rent: false,
    returnCar: false
    }

    renderRentForm = () => {
        this.setState({rentForm: true});
    }

    renderReturnForm = () => {
        this.setState({returnForm: true});
    }

    render(){
    const rentForm = this.state.rentForm;
    const returnForm = this.state.returnForm;

    if(rentForm){
     return(
       <div>
            <RentalForm />
       </div>)
    }

    if(returnForm){
        return(
            <div>
                <ReturnForm />
            </div>)
    }

    return (
    <div className = "wrapper">
        <div className="jumbotron">
            <h2>Fluffy Elephants Carrental</h2>
        </div>

       <div className="buttons">
         <button type="button" id="rent" onClick={this.renderRentForm} >Rent</button>
         <button type="button" id="return" onClick={this.renderReturnForm}>Return</button>
       </div>

       <img src={logo} id="drivingElephant" alt="Driving Elephant"/>

    </div>
         );

    }
}

export default StartPage;