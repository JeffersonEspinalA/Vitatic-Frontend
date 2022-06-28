import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Activity } from "../models/Activity";

@Injectable({
  providedIn: "root",
})
export class ScheduleService {
  private baseUrl: string = "https://localhost:7299/apiSchedule/1";
  constructor(private http: HttpClient) {}
  getAllActivities(): Observable<Activity[]> {
    return this.http.get<Activity[]>(this.baseUrl);
  }
  addActivity(activity: Activity): Observable<Activity> {
    return this.http.put<Activity>(this.baseUrl, activity);
  }
  updateActivity(id: number, activity: Activity): Observable<Activity> {
    return this.http.patch<Activity>(`${"https://localhost:7299/apiSchedule"}/${id}`, activity);
  }
  deleteActivity(id: number): Observable<Activity> {
    return this.http.delete<Activity>(`${"https://localhost:7299/apiSchedule"}/${id}`);
  }
  getAllActivitiesNoOrdenado(): Observable<Activity[]> {
    return this.http.get<Activity[]>("https://localhost:7299/apiSchedule");
  }
}
