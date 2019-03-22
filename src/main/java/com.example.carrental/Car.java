package com.example.carrental;

import lombok.Data;
import org.joda.time.Days;
import org.joda.time.LocalDate;
import org.springframework.stereotype.Service;

@Data
@Service
public class Car {
    private int bookingNumber;
    private String registrationPlate;
    private String carType;
    private int kmAtPickup;
    private int kmAtReturn;
    private String ssn;
    private LocalDate pickupDate;
    private LocalDate returnDate;
    private int baseDayRental;
    private int kmPrice;


    public double calculateRentalCost(String carType) {
        double rentalCost = 0;
        int numberOfDays = calculateNumberOfDays(pickupDate, returnDate);
        int numberOfKm = calculateNumberOfKm(kmAtPickup, kmAtReturn);

        switch (carType) {
            case "small":
                rentalCost = baseDayRental * numberOfDays;
            break;
            case "van":
                rentalCost = baseDayRental * numberOfDays * 1.2 + kmPrice * numberOfKm;
            break;
            case"minibus":
                rentalCost = baseDayRental * numberOfDays * 1.7 +(kmPrice * numberOfKm * 1.5);
                break;
        }
        return rentalCost;
    }

    public int calculateNumberOfKm(int kmAtPickup, int kmAtReturn){
        return kmAtReturn - kmAtPickup;
    }

    public int calculateNumberOfDays(LocalDate pickupDate, LocalDate returnDate) {
        return Days.daysBetween(pickupDate, returnDate).getDays();
    }
}
