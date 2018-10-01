import { Component, OnInit } from '@angular/core';
import { ActivityService } from '../activity.service';
import { Activity } from '../models/activity';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.css']
})
export class ActivityListComponent implements OnInit {

  activity = null;

  activities: Activity[] = [];

  selected = null;

  editActivity: Activity = null;

  newActivity: Activity = new Activity();

  bodyParts = [
    'all',
    'Back',
    'Full',
    'Triceps',
    'Upper Back',
    'Legs',
    'Biceps',
    'Chest',
    'Shoulders',
    'Lower Back'
  ];

  selectedbodyPart = 'all';

  displayActivity = function(activity) {
    this.selected = activity;
  };
  displayTable = function() {
    this.selected = null;
  };

  displayPage = function() {
    this.selected = true;
  };

  reload = function () {
    this.activityService.index().subscribe(
      data => {
        this.activities = data;
        console.log(this.activities);

      },
      err => {
        console.error('Observer got an error: ' + err);
      },
      complete => {
        console.log('complete');
      });
  };

  displayOneActivity = function(selectedActivity) {
    this.activityService.show(selectedActivity.id).subscribe(
      data => {
        this.activity = data;
      },
      err => console.error('Observer got an error: ' + err)
    );
  };

  updateActivity = function (activity: Activity) {
    this.activityService.update(activity).subscribe(
      data => {
        this.editActivity = null;
        this.selected = data;
        this.reload();
      }
    );
    };
    setEditActivity = function() {
      this.editActivity = Object.assign({}, this.selected);
    };

    createActivity(form: NgForm) {
      const activity = form.value;
      console.log(activity);

      this.activityService.create(activity).subscribe(
        data => {
          console.log('returned data: ');
          console.log(data);
          this.reload();
          form.reset();
        }
      );
    }
    deleteActivity = function(id: number) {
      this.activityService.destroy(id).subscribe(
      data => {
        this.reload();
        }
      );
    };

  constructor(private activityService: ActivityService) { }

  ngOnInit() {
    this.reload();

  }

}
