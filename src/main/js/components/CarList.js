import React, { Component } from 'react';
import Car from './Car.js';

class CarList extends Component{
    render() {
        const cars = this.props.cars.map(car =>
            <Car key= {car._links.self.href} car = {car}/>
            );
            return(
                <table>
				<tbody>
					<tr>
						<th>Registration Plate</th>
						<th>Car Type</th>
						<th>Mileage</th>
					</tr>
					{cars}
				</tbody>
			</table>
            )
    }
}
export default CarList;