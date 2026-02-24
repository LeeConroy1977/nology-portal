package com.example.demo.DTOs;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import org.hibernate.validator.constraints.URL;

public class CreateConsultantRequest {
    @NotBlank
    @Size(min = 3, max = 50, message = "Name must be between 3 and 50 characters long")
    private String name;

    @NotBlank
    @Size(min = 1, max = 85, message = "Location must be between 1 and 85 characters long")
    private String location;

    @Email(message = "Please provide a valid email address")
    @NotBlank
    private String email;

    @NotBlank
    @URL(protocol = "https", host = "github.com")
    private String githubLink;

    @NotBlank
    @URL
    private String imageUrl;

    @NotBlank
    private String bio;

    @NotBlank
    private String review;

    @NotBlank
    private String techStack;

    @NotBlank
    private String phoneNumber;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public String getGithubLink() {
        return githubLink;
    }

    public void setGithubLink(String githubLink) {
        this.githubLink = githubLink;
    }

    public String getBio() {
        return bio;
    }

    public void setBio(String bio) {
        this.bio = bio;
    }

    public String getReview() {
        return review;
    }

    public void setReview(String review) {
        this.review = review;
    }

    public String getTechStack() {
        return techStack;
    }

    public void setTechStack(String techStack) {
        this.techStack = techStack;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }
}
