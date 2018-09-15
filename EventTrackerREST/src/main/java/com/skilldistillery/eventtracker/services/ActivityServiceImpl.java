package com.skilldistillery.eventtracker.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.eventtracker.entities.Activity;
import com.skilldistillery.eventtracker.repositories.ActivityRepository;

@Service
public class ActivityServiceImpl implements ActivityService {
	
	@Autowired
	private ActivityRepository activityRepo;

	@Override
	public List<Activity> index() {
		return activityRepo.findAll();
	}

	@Override
	public Activity create(Activity a) {
			
		return activityRepo.saveAndFlush(a);
	}

	@Override
	public Activity delete(Activity a) {
		// TODO Auto-generated method stub
		return null;
	}

}
