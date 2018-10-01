import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Activity } from './models/activity';
import { catchError, tap } from 'rxjs/operators';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
   private urlActivity = 'api/activities';
   private url = environment.baseUrl + this.urlActivity;


   public index(): Observable<Activity[]> {
    return this.http.get<Activity[]>(this.url).pipe(
      catchError((err: any) => {
                  console.log(err);
                  return throwError('Error retrieving data ' + err.status);
                })
    );
  }

  public show(id): Observable<Activity> {
    return this.http.get<Activity>(this.url + '/' + id)
    .pipe(catchError((err: any) => {
        console.log(err);
        return throwError('Error retrieving Activity ' + id + ': status' + err.status);
      })
    );
  }
  public update(activity: Activity) {
    console.log(activity);

    return this.http.put(this.url + '/' + activity.id, activity)
    .pipe(catchError((err: any) => {
      console.log(err);
      return throwError('Error retrieving data ' + err.status);
    })
    );
  }

  public create(activity: Activity) {

     console.log(activity);

     const httpOptions = {
       headers: new HttpHeaders({
         'Content-Type':  'application/json'
       })
     };
     return this.http.post<any>(this.url, activity, httpOptions)
     .pipe(catchError((err: any) => {
       console.log(err);
     // tslint:disable-next-line:no-trailing-whitespace
     return throwError('Error retrieving data ');
   }));
 }
 public destroy(id: number) {
  return this.http.delete(this.url + '/' + id)
  .pipe(catchError((err: any) => {
    console.log(err);
    return throwError('Error retrieving data ' + err.status);
  })
  );

}

  constructor(private http: HttpClient) { }
}
