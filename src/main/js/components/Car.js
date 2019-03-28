import React, { Component } from 'react';

class Car extends React.Component{
	render() {
		return (
			<tr>
				<td>{this.props.car.registrationPlate}</td>
				<td>{this.props.car.carType}</td>
				<td>{this.props.car.mileage}</td>
			</tr>
		)
    }
}

export default Car;