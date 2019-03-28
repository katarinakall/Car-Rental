package com.example.carrental.repository;

import com.example.carrental.domain.Car;
import com.example.carrental.domain.CarType;
import org.springframework.stereotype.Component;

@Component
public class CarRentalRepositoryImpl implements CarRentalRepository {
    @Override
    public Car rentCar(CarType carType) {
        System.out.println("wiiiiiie");
        return null;
    }
}
