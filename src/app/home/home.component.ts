import { Component } from '@angular/core';
import { Course } from './model/course.model';
import { CourseService } from './services/course.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  courses: Course[] = [];

  constructor(private courseService: CourseService) {}
  
  ngOnInit(): void {
    debugger;
    this.courseService.getCourses().subscribe((courses: Course[]) => {
      console.log('courses:', courses);
      this.courses = courses;
    },
    (error: any) => {
      // Handle errors here
      console.error('Error:', error);
      alert('Error occurred');
    });
  }
}
