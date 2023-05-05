package com.DevHive.TukMeet.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TukController {

    @GetMapping("/api/hello")
    public String test() {
        return "Hello World!";
    }
}
