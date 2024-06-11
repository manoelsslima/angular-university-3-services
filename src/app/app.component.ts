import {AfterViewInit, Component, ElementRef, Inject, InjectionToken, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {COURSES} from '../db-data';
import {Course} from './model/course';
import {CourseCardComponent} from './course-card/course-card.component';
import {HighlightedDirective} from './directives/highlighted.directive';
import {Observable} from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { CoursesService } from './services/courses.service';

function coursesServiceProvider(http: HttpClient): CoursesService {
  return new CoursesService(http);
}

const COURSES_SERVICE = new InjectionToken<CoursesService>('COURSES_SERVICE');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    {
      provide: COURSES_SERVICE,
      useFactory: coursesServiceProvider,
      deps: [HttpClient]
    }
  ]
})
export class AppComponent implements OnInit {

  listCourses$: Observable<Course[]>;

  constructor(@Inject(COURSES_SERVICE) private coursesService: CoursesService) {
  }

  ngOnInit() {
    this.listCourses$ = this.coursesService.loadCourses();
  }

  save(course: Course) {
    this.coursesService.saveCourse(course)
      .subscribe(
        () => console.log('Course saved!')
      );
  }

}
