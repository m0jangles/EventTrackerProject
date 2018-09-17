package com.skilldistillery.eventtracker.services;

import java.util.List;

import com.skilldistillery.eventtracker.entities.Activity;

public interface ActivityService {

	List<Activity> index();
	
	Activity create(Activity a);
	
	boolean delete(Activity a);
	
	Activity update(Activity a, int id);
}
