package com.skilldistillery.eventtracker.entities;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.hibernate.annotations.CreationTimestamp;

@Entity
public class Activity {

	//fields
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@CreationTimestamp
	private Date date;
	
	@Column(name="body_part")
	private String bodyPart;
	
	@Column(name="activity_name")
	private String activityName;
	
	@Column(name="sets_performed")
	private int sets;
	
	@Column(name="reps_per_set")
	private int reps;
	
	private String video;
	
	//Constructor
	
	public Activity() {
		
	}

	public Activity(int id, Date date, String bodyPart, String activityName, int sets, int reps, String video) {
		super();
		this.id = id;
		this.date = date;
		this.bodyPart = bodyPart;
		this.activityName = activityName;
		this.sets = sets;
		this.reps = reps;
		this.video = video;
	}

	//getters/setters
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public String getBodyPart() {
		return bodyPart;
	}

	public void setBodyPart(String bodyPart) {
		this.bodyPart = bodyPart;
	}

	public String getActivityName() {
		return activityName;
	}

	public void setActivityName(String activityName) {
		this.activityName = activityName;
	}

	public int getSets() {
		return sets;
	}

	public void setSets(int sets) {
		this.sets = sets;
	}

	public int getReps() {
		return reps;
	}

	public void setReps(int reps) {
		this.reps = reps;
	}

	public String getVideo() {
		return video;
	}

	public void setVideo(String video) {
		this.video = video;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((activityName == null) ? 0 : activityName.hashCode());
		result = prime * result + ((bodyPart == null) ? 0 : bodyPart.hashCode());
		result = prime * result + ((date == null) ? 0 : date.hashCode());
		result = prime * result + id;
		result = prime * result + reps;
		result = prime * result + sets;
		result = prime * result + ((video == null) ? 0 : video.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Activity other = (Activity) obj;
		if (activityName == null) {
			if (other.activityName != null)
				return false;
		} else if (!activityName.equals(other.activityName))
			return false;
		if (bodyPart == null) {
			if (other.bodyPart != null)
				return false;
		} else if (!bodyPart.equals(other.bodyPart))
			return false;
		if (date == null) {
			if (other.date != null)
				return false;
		} else if (!date.equals(other.date))
			return false;
		if (id != other.id)
			return false;
		if (reps != other.reps)
			return false;
		if (sets != other.sets)
			return false;
		if (video == null) {
			if (other.video != null)
				return false;
		} else if (!video.equals(other.video))
			return false;
		return true;
	}
	
	
	
	
	
}
