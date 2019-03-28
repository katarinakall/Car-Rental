package com.example.carrental;

import com.example.carrental.domain.Car;
import com.example.carrental.repository.CarRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import static com.example.carrental.domain.CarType.SMALL;

@Component
public class DatabaseLoader implements CommandLineRunner {

    private final CarRepository repository;

    @Autowired
    public DatabaseLoader(CarRepository carRepository){
        this.repository = carRepository;
    }

    @Override
    public void run(String... args) throws Exception {
        this.repository.save(new Car("ABC 123", SMALL, 0));

    }
}
