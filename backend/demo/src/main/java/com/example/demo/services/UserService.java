package com.example.demo.services;

import com.example.demo.DTOs.CreateUserRequest;
import com.example.demo.DTOs.UserResponse;
import com.example.demo.models.Placement;
import com.example.demo.models.User;
import com.example.demo.repositories.UserRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserService {
    private final UserRepository userRepo;

    public UserService(UserRepository userRepo) {
        this.userRepo = userRepo;
    }

    public User createUser(CreateUserRequest newUser) {
        if (userRepo.existsByEmail(newUser.getEmail())) {
            throw new IllegalArgumentException("Email already in use: " + newUser.getEmail());
        }
        User user = new User();
        // company Name
        user.setCompanyName(newUser.getCompanyName());
        // contact name
        user.setContactName(newUser.getContactName());
        // phone number
        user.setPhoneNumber(newUser.getPhoneNumber());
        // email
        user.setEmail(newUser.getEmail());
        // comments
        user.setComments(newUser.getComments());
        // role
        user.setIsAdmin(newUser.getIsAdmin());
        return userRepo.save(user);
    }

    public List<UserResponse> getAllUsersWithPlacements() {
        // Return all employers that have placements
        List<User> users = userRepo.findAll().stream().filter(
                user -> !user.getPlacements().isEmpty() && !user.getIsAdmin()).toList();

        return users.stream().map(this::mapToUserResponse).toList();
    }

    private UserResponse mapToUserResponse(User user) {
        return new UserResponse(
                user.getCompanyName(),
                user.getPlacements()
        );
    }
}
