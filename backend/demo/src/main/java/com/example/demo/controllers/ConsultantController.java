package com.example.demo.controllers;

import com.example.demo.DTOs.ConsultantResponse;
import com.example.demo.DTOs.CreateConsultantRequest;
import com.example.demo.models.Consultant;
import com.example.demo.services.ConsultantService;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/consultants")
public class ConsultantController {

    private final ConsultantService consultantService;

    public ConsultantController(ConsultantService consultantService) {
        this.consultantService = consultantService;
    }

    @GetMapping
    public List<ConsultantResponse> getAllConsultants() {
        return consultantService.fetchAllConsultants();
    }

    @GetMapping
    @RequestMapping("/{id}")
    public ConsultantResponse getConsultantById(@PathVariable Long id) {
        return consultantService.fetchConsultantByIdWithProjects(id);
    }

    @PostMapping
    public Consultant createConsultant(@Validated @RequestBody CreateConsultantRequest newConsultant) {
        return consultantService.createNewConsultant(newConsultant);
    }
}
