import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

class ReturnForm extends Component{
    constructor(props) {
        super(props);
        this.handleForm = React.createRef();
        this.state = {
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
       <div id="returnform">
           <h1>Return Form</h1>
           <form>
               <p>Enter Booking Number: <input type="text" required pattern="[0-9]{6,6}" title="The booking number should consist of six digits" maxLength="6" size="6"/></p>
               <label htmlFor="date">Enter Return Date and Time</label>
                           <DatePicker
                               id="returnDate"
                               name="date"
                               selected={this.state.currentDate}
                               onChange={this.inputValidationDate}
                               dateFormat="yyyy-MM-dd"/> <input type="time" name="returnTime"/>
               <p>Mileage: <input type="number"/></p>

               <p><input type="submit" value="Submit" /> <input type="reset" value="Reset" /></p>
           </form>
       </div>

    </div>
         );

    }
}

export default ReturnForm;