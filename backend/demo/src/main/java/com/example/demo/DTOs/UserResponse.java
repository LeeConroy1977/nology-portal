package com.example.demo.DTOs;

import com.example.demo.models.Placement;

import java.util.List;

public class UserResponse {
    private String companyName;
    private List<PlacementResponse> listOfPlacements;
    private List<List<ConsultantResponse>> listOfConsultants;
    private String contactName;
    private String phoneNumber;
    private String email;
    private String comments;

    public UserResponse(String companyName, List<PlacementResponse> listOfPlacements) {
        this.companyName = companyName;
        this.listOfPlacements = listOfPlacements;
    }

    public UserResponse(String companyName,
                        List<List<ConsultantResponse>> listOfConsultants,
                        String contactName,
                        String phoneNumber,
                        String email,
                        String comments) {
        this.companyName = companyName;
        this.listOfConsultants = listOfConsultants;
        this.contactName = contactName;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.comments = comments;
    }

    public UserResponse(List<List<ConsultantResponse>> listOfConsultants) {
        this.listOfConsultants = listOfConsultants;
    }

    public String getCompanyName() {
        return companyName;
    }

    public List<PlacementResponse> getListOfPlacements() {
        return listOfPlacements;
    }

    public String getContactName() {
        return contactName;
    }

    public List<List<ConsultantResponse>> getListOfConsultants() {
        return listOfConsultants;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public String getEmail() {
        return email;
    }

    public String getComments() {
        return comments;
    }
}
