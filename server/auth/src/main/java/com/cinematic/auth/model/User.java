package com.cinematic.auth.model;
import com.cinematic.auth.enums.Role;

import java.time.LocalDateTime;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter 
@Setter
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

    @Enumerated (EnumType.STRING)
    @Column (name = "role", nullable = false)
    private Role role;

    @PrePersist 
    protected void onCreate() {
        this.createdAt = LocalDateTime.now();
    }
}
