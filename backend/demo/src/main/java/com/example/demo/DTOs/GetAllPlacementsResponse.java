package com.example.demo.DTOs;

import java.util.List;

public class GetAllPlacementsResponse {
    private List<PlacementSummaryResponse> placements;
    private int totalPlacements;

    public GetAllPlacementsResponse(List<PlacementSummaryResponse> placements, int totalPlacements) {
        this.placements = placements;
        this.totalPlacements = totalPlacements;
    }

    public List<PlacementSummaryResponse> getPlacements() {
        return placements;
    }

    public int getTotalPlacements() {
        return totalPlacements;
    }
}
