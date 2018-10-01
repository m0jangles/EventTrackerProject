package com.skilldistillery.eventtracker.services;

import java.util.List;
import java.util.Optional;

import com.skilldistillery.eventtracker.entities.Activity;

public interface ActivityService {

	List<Activity> index();
	
	Activity create(Activity a);
	
	boolean deleteById(int id);
	
	Activity update(Activity a, int id);
	
	Optional<Activity> findById(int id);
}
