package com.example.carrental;

import com.example.carrental.domain.Car;
import com.example.carrental.repository.CarRentalRepository;
import com.example.carrental.repository.CarRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController

public class CarRentalController {

    @Autowired
    private CarRentalRepository repository;

    @Autowired
    private CarRepository carRepository;

    public CarRentalController(CarRentalRepository repository, CarRepository carRepository) {
        this.repository = repository;
        this.carRepository = carRepository;
    }

    @RequestMapping("/")
    public String index() {

        return "index";
    }

    @PostMapping("/rent")
    public Car newCarRentalRequest (@RequestBody CarRentalRequest request, @RequestHeader("Authorization")String auth){
        return repository.rentCar(request.getCarType());
    }


}
