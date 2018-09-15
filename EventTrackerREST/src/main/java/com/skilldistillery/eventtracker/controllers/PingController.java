package com.skilldistillery.eventtracker.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path="api")
public class PingController {

	@RequestMapping(path="ping")
	public String ping() {
		return "pong";
	}
}