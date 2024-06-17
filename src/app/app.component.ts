import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { Course } from './model/course';
import { CoursesService } from './services/courses.service';
import { AppConfig, CONFIG_TOKEN } from './config';
import { COURSES } from 'src/db-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  courses: Course[] = COURSES;

  constructor(
    private coursesService: CoursesService,
    @Inject(CONFIG_TOKEN) private config: AppConfig) {
  }
  ngOnDestroy(): void {
    console.log("ngOnDestroy");
  }

  ngOnInit() {
    console.log("ngOnInit");
  }

  save(course: Course) {
    this.coursesService.saveCourse(course)
      .subscribe(
        () => console.log('Course saved!')
      );
  }

  destroyComponent() {
    this.courses = [undefined];
  }

}
