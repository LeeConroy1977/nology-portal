package com.example.demo.DTOs;

import com.example.demo.models.Consultant;

import java.util.List;

public class PlacementResponse {
    private final String companyName;
    private final List<Consultant> listOfConsultants;

    public PlacementResponse(String companyName, List<Consultant> listOfConsultants) {
        this.companyName = companyName;
        this.listOfConsultants = listOfConsultants;
    }

    public String getCompanyName() {
        return companyName;
    }

    public List<Consultant> getListOfConsultants() {
        return listOfConsultants;
    }
}
