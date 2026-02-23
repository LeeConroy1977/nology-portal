package com.example.demo.DTOs;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public class CreateUserRequest {
    @NotBlank(message = "Company name is required")
    private String companyName;

    @NotBlank(message = "Your name is required")
    @Size(min = 3, max = 50, message = "Name must be at between 3 and 100 characters long")
    private String contactName;

    @NotBlank(message = "Your phone number is required")
    @Size(min= 10, max = 18, message = "Please ensure your phone number is between 10 and 20 characters long")
    private String phoneNumber;

    @NotBlank(message = "An email address is required")
    @Email(message = "Email must be valid")
    private String email;

    private String comments;

    private Boolean isAdmin;

    public String getCompanyName() {
        return companyName;
    }
    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    public String getContactName() {
        return contactName;
    }

    public void setContactName(String contactName) {
        this.contactName = contactName;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Boolean getIsAdmin() {
        return isAdmin;
    }

    public void setIsAdmin(Boolean admin) {
        this.isAdmin = admin;
    }

    public String getComments() {
        return comments;
    }

    public void setComments(String comments) {
        this.comments = comments;
    }
}