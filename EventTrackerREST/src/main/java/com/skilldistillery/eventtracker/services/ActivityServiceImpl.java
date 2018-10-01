package com.skilldistillery.eventtracker.services;

import java.util.List;
import java.util.Optional;

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
	public boolean deleteById(int id) {
		try {
			activityRepo.deleteById(id);
			return true;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return false;
	}

	@Override
	public Activity update(Activity a, int id) {
		try {
			Activity managedActivity = em.find(Activity.class, id);
			managedActivity.setActivityName(a.getActivityName());
			managedActivity.setBodyPart(a.getBodyPart());
			managedActivity.setSets(a.getSets());
			managedActivity.setReps(a.getReps());

			return managedActivity;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;

	}

	@Override
	public Optional<Activity> findById(int id) {
		// TODO Auto-generated method stub
		return activityRepo.findById(id);
	}

}
