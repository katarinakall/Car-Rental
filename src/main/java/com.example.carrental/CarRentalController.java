package com.example.carrental;

import com.example.carrental.domain.Car;
import com.example.carrental.domain.RentCar;
import com.example.carrental.repository.CarRentalRepository;
import org.springframework.web.bind.annotation.*;

@RestController
public class CarRentalController {

    private CarRentalRepository repository;

    public CarRentalController(CarRentalRepository repository) {
        this.repository = repository;
    }

    @RequestMapping("/")
    public String index() {
        return "Greetings from Spring Boot!";
    }


    @PostMapping("/rent")
    public Car newCarRentalRequest (@RequestBody CarRentalRequest request, @RequestHeader("Authorization")String auth){
        return repository.rentCar(request.getCarType());
    }
}
