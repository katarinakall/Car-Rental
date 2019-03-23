package com.example.carrental;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class CarRentalController {

    @Autowired
    private CarRentalRepository repository;

    @RequestMapping("/")
    public String index() {
        return "Greetings from Spring Boot!";
    }

}
