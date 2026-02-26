package com.example.demo.DTOs;

import com.example.demo.models.Consultant;

import java.util.List;

public class PlacementResponse {
    private final Long id;
    List<ConsultantResponse> consultants;

    public PlacementResponse(Long id, List<ConsultantResponse> consultants) {
        this.id = id;
        this.consultants = consultants;
    }

    public Long getId() {
        return id;
    }

    public List<ConsultantResponse> getConsultants() {
        return consultants;
    }
}
