package com.cinematic.auth.controller;

import java.util.*;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController 
public class AuthController {
    private List<String> list = new ArrayList<>();

    @GetMapping("/api/auth/health")
    public String health() {
        list.add("testing");
        
        return list.toString();
    }
}
