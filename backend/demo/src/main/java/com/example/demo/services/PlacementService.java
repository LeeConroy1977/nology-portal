package com.example.demo.services;


//@Service
//public class PlacementService {
//    private final PlacementRepository placementRepo;
//
//    public PlacementService(PlacementRepository placementRepo) {
//        this.placementRepo = placementRepo;
//
//    }
//    public List<PlacementResponse> fetchAllPlacements(){
//        return placementRepo.findAll().stream().map(this::mapToResponse).toList();
//    }
//
//    private PlacementResponse mapToResponse(Placement placement){
//
//        return new PlacementResponse(
//                placement.getUser().getCompanyName(),
//                placement.getConsultants()
//                );
//
//    }
//}
