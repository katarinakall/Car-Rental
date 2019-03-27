package com.example.carrental.repository;

import com.example.carrental.domain.Car;
import com.example.carrental.domain.CarType;
import com.example.carrental.domain.Customer;
import org.springframework.stereotype.Repository;

@Repository
public interface CarRentalRepository {

    Car rentCar (CarType carType);

}

