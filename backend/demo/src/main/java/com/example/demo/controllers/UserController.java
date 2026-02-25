package com.example.demo.controllers;

import com.example.demo.DTOs.CreatePlacementRequest;
import com.example.demo.DTOs.CreateUserRequest;
import com.example.demo.DTOs.UserResponse;
import com.example.demo.models.User;
import com.example.demo.services.PlacementService;
import com.example.demo.services.UserService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/users")
public class UserController {

    private final UserService userService;
    private final PlacementService placementService;

    public UserController(UserService userService, PlacementService placementService) {
        this.userService = userService;
        this.placementService = placementService;
    }

    @PostMapping
    public User createUser(@Validated @RequestBody CreateUserRequest newUser) {
        return userService.createUser(newUser);
    }

    @GetMapping("/placements-list")
    public List<UserResponse> fetchUsersWhoHavePlacements() {
        return userService.getAllUsersWithPlacements();
    }

    @GetMapping("/{id}/consultants-list")
    public UserResponse getUserById(@PathVariable Long id) {
        return userService.fetchUserById(id);
    }

    @GetMapping("/{id}/view-selections-list")
    public UserResponse getUserByIdWithSelectedConsultants(@PathVariable Long id) {
        return userService.fetchUserByIdWithSelectedConsultants(id);
    }

    @PostMapping
    @RequestMapping("/{id}/view-selections")
    public ResponseEntity<String> createPlacementListForUser(@PathVariable Long id,
                                                             @RequestBody CreatePlacementRequest newPlacementRequest) {
        placementService.createPlacementListForUser(id, newPlacementRequest);
        return ResponseEntity.ok("Successfully submitted your placements!");
    }
}

