package com.cinematic.auth.model;

import java.time.LocalDateTime;

import com.cinematic.auth.enums.Role;

import jakarta.persistence.*;
import lombok.Data;

@Data 
@Entity 
@Table(name = "users")
public class User {
    @Id 
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private Long id;

    @Column (nullable = false, unique = true, length = 100)
    private String username;

    @Column (nullable = false, unique = true, length = 100)
    private String email;

    @Column (nullable = false)
    private String password;

    @Column (name = "created_at", updatable = false)
    private LocalDateTime createdAt;

    @Column (name = "role")
    private Role role;

    @PrePersist 
    protected void onCreate() {
        this.createdAt = LocalDateTime.now();
    }
}
