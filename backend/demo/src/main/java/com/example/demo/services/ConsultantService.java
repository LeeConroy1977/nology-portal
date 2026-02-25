package com.example.demo.services;

import com.example.demo.DTOs.ConsultantResponse;
import com.example.demo.DTOs.CreateConsultantRequest;
import com.example.demo.DTOs.ProjectResponse;
import com.example.demo.models.Consultant;
import com.example.demo.models.Project;
import com.example.demo.repositories.ConsultantRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ConsultantService {

    private final ConsultantRepository consultantRepo;

    public ConsultantService(ConsultantRepository consultantRepo) {
        this.consultantRepo = consultantRepo;
    }

    public List<ConsultantResponse> fetchAllConsultants() {
        return consultantRepo.findAllByOrderByNameAsc().stream().map(this::mapToResponse).toList();
    }

    public ConsultantResponse fetchConsultantByIdWithProjects(Long id) {
        Consultant consultant = consultantRepo.findById(id).orElseThrow(() ->
        new EntityNotFoundException(String.format(
                "Consultant with ID: %d, was not found", id))
        );

        return mapToResponse(consultant);
    }

    public Consultant createNewConsultant(CreateConsultantRequest newConsultant) {
        if (consultantRepo.existsByEmail(newConsultant.getEmail())) {
            throw new IllegalArgumentException("Consultant with this email already in use: " + newConsultant.getEmail());
        }
        Consultant consultant = new Consultant();
        consultant.setName(newConsultant.getName());
        consultant.setLocation(newConsultant.getLocation());
        consultant.setEmail(newConsultant.getEmail());
        consultant.setGithubLink(newConsultant.getGithubLink());
        consultant.setBio(newConsultant.getBio());
        consultant.setReview(newConsultant.getReview());
        consultant.setTechStack(newConsultant.getTechStack());
        consultant.setPhoneNumber(newConsultant.getPhoneNumber());
        consultant.setImageUrl(newConsultant.getImageUrl());
        return consultantRepo.save(consultant);
    }

    public void deleteConsultantById(Long id) {
        consultantRepo.findById(id).orElseThrow(() ->
                new EntityNotFoundException(String.format(
                        "Consultant with ID: %d, was not found", id))
        );
        consultantRepo.deleteById(id);
    }

    private ConsultantResponse mapToResponse(Consultant consultant) {
        List<ProjectResponse> projects = consultant.getProjects().stream().map(this::mapProjectToResponse).toList();
        return new ConsultantResponse(
                consultant.getId(),
                consultant.getName(),
                consultant.getLocation(),
                consultant.getEmail(),
                consultant.getImageUrl(),
                consultant.getGithubLink(),
                consultant.getPhoneNumber(),
                projects
                );
    }

    private ProjectResponse mapProjectToResponse(Project project) {
        return new ProjectResponse(
                project.getImageUrl(),
                project.getProjectName(),
                project.getDescription(),
                project.getGithubLink()
                );
    }
}
