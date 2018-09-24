package com.skilldistillery.eventtracker.services;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.eventtracker.entities.Activity;
import com.skilldistillery.eventtracker.repositories.ActivityRepository;

@Service
@Transactional
public class ActivityServiceImpl implements ActivityService {

	@PersistenceContext
	EntityManager em;
	
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
	public boolean delete(Activity a, int id) {
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
		Activity managedActivity = em.find(Activity.class, id);
		return activityRepo.saveAndFlush(managedActivity);
	}

}
