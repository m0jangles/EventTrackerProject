package com.skilldistillery.eventtracker.services;

import java.util.List;

import com.skilldistillery.eventtracker.entities.Activity;

public interface ActivityService {

	List<Activity> index();
	
	Activity create(Activity a);
	
	Activity delete(Activity a);
}
