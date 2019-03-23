import React, { Component } from 'react';
import './StartPage.css';
import logo from './drivingElephant.png';

class StartPage extends Component{
    render(){
    return (
    <div className = "wrapper">
        <div className="jumbotron">
            <h2>Fluffy Elephants Carrental</h2>
        </div>

<div class="buttons">
    <button type="button" id="rent" className="btn btn-lg">Rent</button>
    <button type="button" id="return" className="btn btn-lg">Return</button>
</div>

<img src={logo} id="drivingElephant" alt="Driving Elephant"/>

    </div>
         );

    }
}

export default StartPage;