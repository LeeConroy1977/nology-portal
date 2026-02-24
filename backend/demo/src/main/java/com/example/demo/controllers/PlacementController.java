package com.example.demo.controllers;

import com.example.demo.DTOs.PlacementResponse;
import com.example.demo.models.Placement;
import com.example.demo.services.PlacementService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/v1/placements list")
public class PlacementController {
    private final PlacementService placementService;

    public PlacementController(PlacementService placementService) {
        this.placementService = placementService;
    }

    @GetMapping
    public List<PlacementResponse> getAllPlacements (){
        return placementService.fetchAllPlacements();
    }
}
