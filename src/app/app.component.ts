import {AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, Inject, InjectionToken, OnInit, QueryList, ViewChild, ViewChildren, inject} from '@angular/core';
import {COURSES} from '../db-data';
import {Course} from './model/course';
import {CourseCardComponent} from './course-card/course-card.component';
import {HighlightedDirective} from './directives/highlighted.directive';
import {Observable} from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { CoursesService } from './services/courses.service';
import { APP_CONFIG, AppConfig, CONFIG_TOKEN} from './config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

  courses$: Observable<Course[]>;
  //courses: Course[];

  constructor(
    private coursesService: CoursesService,
    @Inject(CONFIG_TOKEN) private config: AppConfig) {

    console.log(this.config);
  }

  ngOnInit() {
    this.courses$ = this.coursesService.loadCourses();
    //this.coursesService.loadCourses().subscribe(list => this.courses = list);
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
