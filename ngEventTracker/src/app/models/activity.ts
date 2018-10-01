export class Activity {
  id: number;
  date: string;
  bodyPart: string;
  activityName: string;
  sets: number;
  reps: number;
  video: string;
  types: any;

  // tslint:disable-next-line:max-line-length
  constructor(
    id?: number,
    date?: string,
    bodyPart?: string,
    activityName?: string,
    sets?: number,
    reps?: number,
    video?: string
  ) {
    this.id = id;
    this.date = date;
    this.bodyPart = bodyPart;
    this.activityName = activityName;
    this.sets = sets;
    this.reps = reps;
    this.video = video;
  }
}
