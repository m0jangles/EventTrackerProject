package com.skilldistillery.eventtracker.controllers;

import java.util.List;
import java.util.Optional;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.eventtracker.entities.Activity;
import com.skilldistillery.eventtracker.services.ActivityService;

@RestController
@RequestMapping("api")
@CrossOrigin({"*", "http://localhost:4201"})
public class ActivityController {

	@Autowired
	private ActivityService activityService;

	@RequestMapping(path = "activities", method = RequestMethod.GET)
	public List<Activity> index() {
		return activityService.index();
	}
	
	@RequestMapping(path = "activities/{aid}", method = RequestMethod.GET)
	public Optional<Activity> getOneById(@PathVariable int aid) {
		return activityService.findById(aid);
	}

	@RequestMapping(path = "activities", method = RequestMethod.POST)
	public Activity create(@RequestBody Activity activity, HttpServletResponse res) {
		Activity newActivity = activityService.create(activity);
		if (newActivity == null) {
			res.setStatus(500);
		} else {
			res.setStatus(201);
		}
		return newActivity;
	}
	
	@RequestMapping(path="activities/{id}", method = RequestMethod.DELETE)
	public boolean deleteById(@PathVariable int id,HttpServletResponse res) {
		boolean result = activityService.deleteById(id);
		if(result) {
			res.setStatus(200);
		}else {
			res.setStatus(404);
		}
		return result;
	}
	
	@RequestMapping(path="activities/{id}", method=RequestMethod.PUT)
	public Activity update(@RequestBody Activity a, @PathVariable int id, HttpServletResponse res) {
		Activity updated = activityService.update(a, id);
		
		if(updated != null) {
			res.setStatus(201);
		}else {
			res.setStatus(500);
		}
		return updated;
	}
	
}

