package com.example.demo.DTOs;

public class PlacementSummaryResponse {
    private Long id;
    private String companyName;
    private int numberOfConsultants;

    public PlacementSummaryResponse(Long id, String companyName, int numberOfConsultants) {
        this.id = id;
        this.companyName = companyName;
        this.numberOfConsultants = numberOfConsultants;
    }

    public Long getId() {
        return id;
    }

    public String getCompanyName() {
        return companyName;
    }

    public int getNumberOfConsultants() {
        return numberOfConsultants;
    }
}
