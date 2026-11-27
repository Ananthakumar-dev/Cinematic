package com.cinematic.auth.dto.response;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor 
public class SignupResponse {
    private String name;
    private String email;
    private String token;
}
