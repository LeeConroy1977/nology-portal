package com.example.demo.services;

import com.example.demo.DTOs.ConsultantResponse;
import com.example.demo.DTOs.CreatePlacementRequest;
import com.example.demo.DTOs.GetAllPlacementsResponse;
import com.example.demo.DTOs.PlacementResponse;
import com.example.demo.DTOs.PlacementSummaryResponse;
import com.example.demo.DTOs.ProjectResponse;
import com.example.demo.models.Consultant;
import com.example.demo.models.Placement;
import com.example.demo.models.User;
import com.example.demo.repositories.ConsultantRepository;
import com.example.demo.repositories.PlacementRepository;
import com.example.demo.repositories.UserRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class PlacementService {
    private final PlacementRepository placementRepo;
    private final UserRepository userRepo;
    private final ConsultantRepository consultantRepo;

    public PlacementService(PlacementRepository placementRepo,
            UserRepository userRepo,
            ConsultantRepository consultantRepo) {
        this.placementRepo = placementRepo;
        this.userRepo = userRepo;
        this.consultantRepo = consultantRepo;
    }

    public void createPlacementListForUser(Long id,
            CreatePlacementRequest newPlacementRequest) {

        User user = userRepo.findById(id).orElseThrow(() -> new EntityNotFoundException(String.format(
                "User with ID: %d, was not found", id)));

        List<Consultant> listOfConsultants = new ArrayList<>();

        for (Long consultantId : newPlacementRequest) {
            Consultant consultant = consultantRepo.findById(consultantId)
                    .orElseThrow(() -> new EntityNotFoundException(String.format(
                            "Consultant with ID: %d, was not found", consultantId)));
            listOfConsultants.add(consultant);
        }
        Placement placement = new Placement();
        placement.setUser(user);
        placement.setConsultants(listOfConsultants);
        placementRepo.save(placement);
    }

    public PlacementResponse fetchPlacementById(Long id) {
        Placement placement = placementRepo.findById(id).orElseThrow(() -> new EntityNotFoundException(String.format(
                "Placement with ID: %d, was not found", id)));
        return mapToPlacementResponse(placement);
    }

    public GetAllPlacementsResponse fetchAllPlacements() {
        List<PlacementSummaryResponse> pList = placementRepo.findAll().stream().map(this::mapToAllPlacementResponse)
                .toList();

        return new GetAllPlacementsResponse(pList, pList.size());
    }

    private PlacementSummaryResponse mapToAllPlacementResponse(Placement placement) {
        return new PlacementSummaryResponse(
                placement.getId(),
                placement.getUser().getCompanyName(),
                placement.getConsultants().stream().map(this::mapToConsultantResponseSummary).toList());
    }

    private PlacementResponse mapToPlacementResponse(Placement placement) {
        return new PlacementResponse(
                placement.getId(),
                placement.getUser().getCompanyName(),
                placement.getUser().getContactName(),
                placement.getUser().getPhoneNumber(),
                placement.getUser().getEmail(),
                placement.getUser().getComments(),
                placement.getConsultants().stream().map(this::mapToConsultantResponse).toList());
    }

    private ConsultantResponse mapToConsultantResponse(Consultant consultant) {
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
                consultant.getTechStack());
    }

    private ConsultantResponse mapToConsultantResponseSummary(Consultant consultant) {
        return new ConsultantResponse(
                consultant.getId(),
                consultant.getName());
    }
}
