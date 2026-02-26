package com.example.demo.services;

import com.example.demo.DTOs.ConsultantResponse;
import com.example.demo.DTOs.CreateUserRequest;
import com.example.demo.DTOs.PlacementResponse;
import com.example.demo.DTOs.ProjectResponse;
import com.example.demo.DTOs.UserResponse;
import com.example.demo.models.Consultant;
import com.example.demo.models.Placement;
import com.example.demo.models.Project;
import com.example.demo.models.User;
import com.example.demo.repositories.UserRepository;
import jakarta.persistence.EntityNotFoundException;
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
        user.setCompanyName(newUser.getCompanyName());
        user.setContactName(newUser.getContactName());
        user.setPhoneNumber(newUser.getPhoneNumber());
        user.setEmail(newUser.getEmail());
        user.setComments(newUser.getComments());
        user.setIsAdmin(newUser.getIsAdmin());
        return userRepo.save(user);
    }

    public List<UserResponse> getAllUsersWithPlacements() {
        // Return all employers that have placements
        List<User> users = userRepo.findAllByOrderByCompanyNameAsc().stream().filter(
                user -> !user.getPlacements().isEmpty() && !user.getIsAdmin()).toList();

        return users.stream().map(this::mapToUserResponse).toList();
    }

    public UserResponse fetchUserById(Long id) {
        User user = userRepo.findById(id).orElseThrow(() -> new EntityNotFoundException(String.format(
                "User with ID: %d, was not found", id)));

        List<List<ConsultantResponse>> listOfConsultants = new ArrayList<>();
        // Will only run once because current employer can only make one list of
        // placements
        for (Placement placement : user.getPlacements()) {
            List<ConsultantResponse> listOfConsultantResponse = placement.getConsultants().stream().map(
                    this::mapToConsultantResponse).toList();
            listOfConsultants.add(listOfConsultantResponse);
        }
        return mapToUserResponse(user, listOfConsultants);
    }

    public UserResponse fetchUserByIdWithSelectedConsultants(Long id) {
        User user = userRepo.findById(id).orElseThrow(() -> new EntityNotFoundException(String.format(
                "User with ID: %d, was not found", id)));
        List<List<ConsultantResponse>> listOfConsultants = new ArrayList<>();
        for (Placement placement : user.getPlacements()) {
            List<ConsultantResponse> listOfConsultantResponse = placement.getConsultants().stream().map(
                    this::mapToConsultantResponse).toList();
            listOfConsultants.add(listOfConsultantResponse);
        }
        return new UserResponse(listOfConsultants);
    }

    private UserResponse mapToUserResponse(User user, List<List<ConsultantResponse>> listOfConsultants) {
        return new UserResponse(
                user.getCompanyName(),
                listOfConsultants,
                user.getContactName(),
                user.getPhoneNumber(),
                user.getEmail(),
                user.getComments());
    }

    private ConsultantResponse mapToConsultantResponse(Consultant consultant) {
        var projectList = consultant.getProjects();
        List<ProjectResponse> projects = projectList == null
                ? List.of()
                : projectList.stream().map(this::mapProjectToResponse).toList();
        return new ConsultantResponse(
                consultant.getId(),
                consultant.getName(),
                consultant.getLocation(),
                consultant.getEmail(),
                consultant.getImageUrl(),
                consultant.getGithubLink(),
                consultant.getPhoneNumber(),
                consultant.getBio(),
                consultant.getReview(),
                consultant.getTechStack(),
                projects);
    }

    private ProjectResponse mapProjectToResponse(Project project) {
        return new ProjectResponse(
                project.getImageUrl(),
                project.getProjectName(),
                project.getDescription(),
                project.getGithubLink());
    }

    private UserResponse mapToUserResponse(User user) {
        List<PlacementResponse> placementResponses = user.getPlacements().stream()
                .map(placement -> {
                    List<Consultant> consultants = placement.getConsultants();
                    if (consultants == null)
                        consultants = List.of();
                    return new PlacementResponse(
                            placement.getId(),
                            consultants.stream().map(this::mapToConsultantResponse).toList());
                })
                .toList();
        return new UserResponse(user.getCompanyName(), placementResponses);
    }

}
