package com.skilldistillery.eventtracker.services;

import java.sql.Date;
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
	public boolean delete(Activity a) {
		try {
			activityRepo.delete(a);
			return true;
		}catch(Exception e) {
			e.printStackTrace();
		}
		return false;
	}

	@Override
	public Activity update(Activity a, int id) {
		a.setId(id);
		a.setDate(a.getDate());
		return activityRepo.saveAndFlush(a);
	}

}
