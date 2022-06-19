import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Advice } from '../models/Advice';

@Injectable({
  providedIn: 'root'
})
export class AdvicesectionService {

  private baseUrl: string = 'https://localhost:7299/api/AdviceSection/1';

  constructor(private http: HttpClient) {}

  postAdvice(category: string): Observable<Advice[]> {
    return this.http.post<Advice[]>(this.baseUrl, category);
  }
}
