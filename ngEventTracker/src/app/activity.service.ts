import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Activity } from './models/activity';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
   private baseUrl = 'http://localhost:8081/';
   private urlActivity = this.baseUrl + 'api/activities';

   public index(): Observable<Activity[]> {
    return this.http.get<Activity[]>(this.urlActivity).pipe(
      catchError((err: any) => {
                  console.log(err);
                  return throwError('Error retrieving data ' + err.status);
                })
    );
  }

  public show(id): Observable<Activity> {
    return this.http.get<Activity>(this.urlActivity + '/' + id)
    .pipe(catchError((err: any) => {
        console.log(err);
        return throwError('Error retrieving Activity ' + id + ': status' + err.status);
      })
    );
  }
  public update(activity: Activity) {
    console.log(activity);

    return this.http.put(this.urlActivity + '/' + activity.id, activity)
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
     return this.http.post<any>(this.urlActivity, activity, httpOptions)
     .pipe(catchError((err: any) => {
       console.log(err);
     // tslint:disable-next-line:no-trailing-whitespace
     return throwError('Error retrieving data ');
   }));
 }
 public destroy(id: number) {
  return this.http.delete(this.urlActivity + '/' + id)
  .pipe(catchError((err: any) => {
    console.log(err);
    return throwError('Error retrieving data ' + err.status);
  })
  );

}

  constructor(private http: HttpClient) { }
}
