import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

class RentalForm extends Component{
    constructor(props) {
        super(props);
        this.handleForm = React.createRef();
        this.state = {
            dateOfBirth: new Date,
            inputErrorDate: false,
            currentDate: new Date()
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

    render(){
    return (
    <div className = "wrapper">
       <div id="rentform">
           <h1>Rental Form</h1>
           <form>
                <label htmlFor="date">Enter Date of Birth</label>
                           <DatePicker
                               id="dateOfBirth"
                               name="date"
                               selected={this.state.currentDate}
                               onChange={this.inputValidationDate}
                               dateFormat="yyyy-MM-dd"/> <input type="text" required pattern="[0-9]{4,4}" title="Enter your 4 last digits" maxLength="4" size="4"/>
               <p>Select Car Type:
                   <select id= "cartype" name="cartype">
                       <option value="small">Small</option>
                       <option value="van">Van</option>
                       <option value="minibus">Minibus</option>
                   </select>
               </p>

               <label htmlFor="date">Enter Pick up Date and Time</label>
                           <DatePicker
                               id="pickUpDate"
                               name="date"
                               selected={this.state.currentDate}
                               onChange={this.inputValidationDate}
                               dateFormat="yyyy-MM-dd"/> <input type="time" name="pickUpTime"/>
               <p>Mileage: <input type="number"/></p>
               <p><input type="submit" value="Submit" /> <input type="reset" value="Reset" /></p>
           </form>
       </div>

    </div>
         );

    }
}

export default RentalForm;