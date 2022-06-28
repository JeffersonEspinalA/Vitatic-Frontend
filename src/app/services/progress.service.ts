import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Progress } from '../models/Progress';

@Injectable({
  providedIn: 'root'
})
export class ProgressService {
  private baseUrl: string = "https://localhost:7299/apiProgress";
  constructor(private http: HttpClient) {}
  getAllProgress(): Observable<Progress[]> {
    return this.http.get<Progress[]>(this.baseUrl);
  }
  putProgress(id: number, progress: Progress): Observable<Progress> {
    return this.http.put<Progress>(`${"https://localhost:7299/apiProgress"}/${id}`, progress);
  }
}
