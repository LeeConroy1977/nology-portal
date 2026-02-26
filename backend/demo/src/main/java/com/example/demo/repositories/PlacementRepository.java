package com.example.demo.repositories;


import com.example.demo.models.Placement;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface PlacementRepository extends JpaRepository<Placement, Long> {

    @Query("SELECT DISTINCT p FROM Placements p LEFT JOIN FETCH p.consultants LEFT JOIN FETCH p.user")
    List<Placement> findAllWithConsultantsAndUser();

    @Query("SELECT p FROM Placements p LEFT JOIN FETCH p.consultants LEFT JOIN FETCH p.user WHERE p.id = :id")
    Optional<Placement> findByIdWithConsultantsAndUser(@Param("id") Long id);
}
