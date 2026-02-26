package com.example.demo.controllers;

import com.example.demo.DTOs.PlacementResponse;
import com.example.demo.services.PlacementService;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/v1/placements")
public class PlacementController {

    private final PlacementService placementService;

    public PlacementController(PlacementService placementService) {
        this.placementService = placementService;
    }

    // private final PlacementService placementService;
    //
    // public PlacementController(PlacementService placementService) {
    // this.placementService = placementService;
    // }
    //
    // @PostMapping
    // @RequestMapping("")
    // public List<PlacementResponse> getAllPlacements (){
    // return placementService.fetchAllPlacements();
    // }

    @GetMapping
    public List<PlacementResponse> getAllPlacements() {
        return placementService.fetchAllPlacements();
    }
}
