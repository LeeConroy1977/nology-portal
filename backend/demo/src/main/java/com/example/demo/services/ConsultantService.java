package com.example.demo.services;

import com.example.demo.DTOs.CreateConsultantRequest;
import com.example.demo.DTOs.CreateConsultantResponse;
import com.example.demo.models.Consultant;
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

    public List<CreateConsultantResponse> fetchAllConsultants() {
        return consultantRepo.findAll().stream().map(this::mapToResponse).toList();
    }

    public Consultant fetchConsultantById(Long id) {
        return consultantRepo.findById(id).orElseThrow(() ->
        new EntityNotFoundException(String.format(
                "Consultant with ID: %d, was not found", id))
        );
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

    private CreateConsultantResponse mapToResponse(Consultant consultant) {
        return new CreateConsultantResponse(
                consultant.getId(),
                consultant.getName(),
                consultant.getLocation(),
                consultant.getEmail(),
                consultant.getImageUrl(),
                consultant.getGithubLink(),
                consultant.getPhoneNumber()
                );
    }
}
