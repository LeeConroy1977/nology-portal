package com.example.demo.models;

import jakarta.persistence.*;

import java.util.List;

@Entity(name = "Users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String companyName;
    private String contactName;
    private String phoneNumber;
    private String email;
    private String comments;
    private Boolean isAdmin;

    @OneToMany(mappedBy = "user", cascade = CascadeType.REMOVE)
    // May add @JsonIgnore
    private List<Placement> placements;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

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

    public List<Placement> getPlacements() {
        return placements;
    }

    public void setPlacements(List<Placement> placements) {
        this.placements = placements;
    }

    public String getComments() {
        return comments;
    }

    public void setComments(String comments) {
        this.comments = comments;
    }
}
