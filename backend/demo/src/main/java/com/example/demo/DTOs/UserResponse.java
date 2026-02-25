package com.example.demo.DTOs;

import com.example.demo.models.Placement;

import java.util.List;

public class UserResponse {
    private final String companyName;
    private List<Placement> listOfPlacements;
    private List<List<ConsultantResponse>> listOfConsultants;
    private String contactName;
    private String phoneNumber;
    private String email;
    private String comments;

    public UserResponse(String companyName, List<Placement> listOfPlacements) {
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

    public String getCompanyName() {
        return companyName;
    }

    public List<Placement> getListOfPlacements() {
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
