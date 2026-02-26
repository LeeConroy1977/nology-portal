package com.example.demo.DTOs;

import java.util.List;

public class PlacementSummaryResponse {
    private Long id;
    private String companyName;
    private List<ConsultantResponse> consultants;
    private int numberOfConsultants;

    public PlacementSummaryResponse(Long id, String companyName, List<ConsultantResponse> consultants) {
        this.id = id;
        this.companyName = companyName;
        this.consultants = consultants;
        this.numberOfConsultants = consultants.size();
    }

    public Long getId() {
        return id;
    }

    public String getCompanyName() {
        return companyName;
    }

    public List<ConsultantResponse> getConsultants() {
        return consultants;
    }

    public int getNumberOfConsultants() {
        return numberOfConsultants;
    }
}
