package com.example.carrental;

import com.example.carrental.domain.CarType;
import lombok.Data;

import java.time.LocalDate;
import java.time.LocalTime;

@Data
public class CarRentalRequest {
    private LocalDate dateOfBirth;
    private int lastFourDigits;
    private CarType carType;
    private LocalDate pickUpDate;
    private LocalTime pickUpTime;
    private int milageAtPickup;
}
