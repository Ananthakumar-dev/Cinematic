package com.cinematic.auth.dto.request;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class SignupRequest {
        @NotBlank(message = "Username is required")
        @Size(min = 3, max = 20, message = "Username must be between 3 and 20 characters")
        String username;

        @NotBlank(message = "Email is required")
        @Email(message = "Invalid email address")
        String email;

        @NotBlank(message = "Password is required")
        @Size(min = 6, max = 20, message = "Password must be between 6 and 20 characters")
        String password;
}
