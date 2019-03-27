import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

class RentalForm extends Component{
    constructor(props) {
        super(props);
        this.handleForm = React.createRef();
        this.state = {
            dateOfBirth: '',
            lastFourDigits: '', 
            carType: '',
            inputErrorDate: false,
            pickUpDate: new Date(), 
            pickUpTime: '',
            mileage: ''
        }
    }

    inputValidationDate = (date) => {
        if(date === null) {
            this.setState({
                inputErrorDate: true,
                currentDate: date
            });
        } else {
            this.setState({
                inputErrorDate: false,
                currentDate: date
            });
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if(this.state.inputErrorDate){
            return;
        }
        const data = new FormData(event.target);
        var object = {};
        data.forEach(function(value, key){
            object[key] = value;
        });
        var json = JSON.stringify(object);
        let token = localStorage.getItem("token");
        fetch(process.env.REACT_APP_BACKEND_URL + "/rent", {
            method: 'POST',
            body: json, 
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                "Authorization": `Bearer ${token}` 
            },
        }).then(res => res.json())
        .then(this.handleForm.current.reset());


    }

    render() {
    return (
    <div className = "wrapper">
       <div id="rentform">
           <h1>Rental Form</h1>
           <form className="select" onSubmit={this.handleSubmit} ref={this.handleForm}>
                <label htmlFor="dateOfBirth">Enter Date of Birth: </label>
                           <DatePicker
                               id="dateOfBirth"
                               name="dateOfBirth"
                               selected={this.state.currentDate}
                               onChange={this.inputValidationDate}
                               dateFormat="yyyy-MM-dd"/> <input htmlFor="lastFourDigits" type="text" required pattern="[0-9]{4,4}" title="Enter your 4 last digits" maxLength="4" size="4"/>
               <p htmlFor="carType">Select Car Type: 
                   <select id= "cartype" name="cartype" required value={this.state.carType} onChange={(event) => this.setState({ carType: event.target.value })}>
                       <option value="" disabled selected>Car Type</option>
                       <option value="small">Small</option>
                       <option value="van">Van</option>
                       <option value="minibus">Minibus</option>
                   </select>
               </p>

               <label htmlFor="pickUpDate">Enter Pick up Date and Time: </label>
                           <DatePicker
                               id="pickUpDate"
                               name="pickUpDate"
                               selected={this.state.currentDate}
                               onChange={this.inputValidationDate}
                               dateFormat="yyyy-MM-dd"/> <input type="time" name="pickUpTime"/>
               <p>Mileage: <input type="number"/></p>
               <p><input type="submit" value="Submit"/> <input type="reset" value="Reset" /></p>
           </form>
       </div>

    </div>
         );

    }
}

export default RentalForm;