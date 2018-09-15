package com.skilldistillery.eventtracker.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.eventtracker.entities.Activity;

public interface ActivityRepository extends JpaRepository<Activity, Integer> {

}
