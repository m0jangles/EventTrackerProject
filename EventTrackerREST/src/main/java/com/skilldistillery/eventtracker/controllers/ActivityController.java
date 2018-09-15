package com.skilldistillery.eventtracker.controllers;

import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.eventtracker.entities.Activity;
import com.skilldistillery.eventtracker.services.ActivityService;

@RestController
@RequestMapping("api")
public class ActivityController {

	@Autowired
	private ActivityService activityService;

	@RequestMapping(path = "activities", method = RequestMethod.GET)
	public List<Activity> index() {
		return activityService.index();
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
}
