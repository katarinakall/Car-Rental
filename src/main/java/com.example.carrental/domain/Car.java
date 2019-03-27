package com.example.carrental.domain;

import lombok.Data;

@Data
public class Car {
    private String registrationPlate;
    private CarType carType;
    private int mileage;


}
