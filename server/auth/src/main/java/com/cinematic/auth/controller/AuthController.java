package com.cinematic.auth.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController 
public class AuthController {
    @GetMapping("/api/auth/health")
    public String health() {
        return "Auth service is running!";
    }
}
