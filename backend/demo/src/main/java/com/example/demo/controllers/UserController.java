package com.example.demo.controllers;

import com.example.demo.DTOs.CreateUserRequest;
import com.example.demo.DTOs.UserResponse;
import com.example.demo.models.User;
import com.example.demo.services.UserService;
import jakarta.validation.Valid;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/users")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping
    public User createUser(@Validated @RequestBody CreateUserRequest newUser) {
        return userService.createUser(newUser);
    }

    @GetMapping("/placements-list")
    public List<UserResponse> fetchUsersWhoHavePlacements() {
        return userService.getAllUsersWithPlacements();
    }
}
