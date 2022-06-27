import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Advice } from "../models/Advice";
import { Category } from "../models/Category";

@Injectable({
  providedIn: "root",
})
export class AdvicesectionService {
  private baseUrl: string = "https://localhost:7299/api/AdviceSection/1";
  constructor(private http: HttpClient) {}

  getAllAdvice(category: Category): Observable<Advice[]> {
    return this.http.post<Advice[]>(this.baseUrl, category);
  }
}
