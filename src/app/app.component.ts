import { Component, Inject, OnInit } from '@angular/core';
import { Course } from './model/course';
import { Observable } from 'rxjs';
import { CoursesService } from './services/courses.service';
import { AppConfig, CONFIG_TOKEN } from './config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  courses$: Observable<Course[]>;

  constructor(
    private coursesService: CoursesService,
    @Inject(CONFIG_TOKEN) private config: AppConfig) {
    console.log(this.config);
  }

  ngOnInit() {
    this.courses$ = this.coursesService.loadCourses();
  }

  save(course: Course) {
    this.coursesService.saveCourse(course)
      .subscribe(
        () => console.log('Course saved!')
      );
  }

  onEditCourse() {
  }

}
