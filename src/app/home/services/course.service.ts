import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from '../model/course.model';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private apiUrl = 'http://localhost:9192';

  constructor(private http: HttpClient) {}

  getCourses(): Observable<Course[]> {
    debugger;
    return this.http.get<Course[]>(`${this.apiUrl}/courses`);
  }
}
