package com.example.demo.services;

import com.example.demo.DTOs.PlacementResponse;
import com.example.demo.models.Placement;
import com.example.demo.repositories.PlacementRepository;
import org.springframework.stereotype.Service;
import java.util.List;


@Service
public class PlacementService {
    private final PlacementRepository placementRepo;

    public PlacementService(PlacementRepository placementRepo) {
        this.placementRepo = placementRepo;

    }
    public List<PlacementResponse> fetchAllPlacements(){
        return placementRepo.findAll().stream().map(this::mapToResponse).toList();
    }

    private PlacementResponse mapToResponse(Placement placement){

        return new PlacementResponse(
                placement.getUser().getCompanyName(),
                placement.getConsultants()
                );

    }
}
