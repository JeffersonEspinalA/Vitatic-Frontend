import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Activity } from '../models/Activity';

@Injectable({
  providedIn: 'root'
})
export class ListactivitiesService {
  private baseUrl: string = "https://localhost:7299/apiSchedule/1";
  constructor(private http: HttpClient) {}
  getAllActivities(): Observable<Activity[]> {
    return this.http.get<Activity[]>(this.baseUrl);
  }
}
