import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, Inject, OnInit } from '@angular/core';
import { Course } from './model/course';
import { Observable } from 'rxjs';
import { CoursesService } from './services/courses.service';
import { AppConfig, CONFIG_TOKEN } from './config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit, DoCheck {

  //courses$: Observable<Course[]>;
  courses: Course[];
  loaded = false;

  constructor(
    private coursesService: CoursesService,
    @Inject(CONFIG_TOKEN) private config: AppConfig,
    private cd: ChangeDetectorRef) {
  }

  ngDoCheck() {
    console.log("ngDoCheck()");
    if (this.loaded) {
      this.cd.markForCheck();
      console.log("called cd.markForCheck()");
      this.loaded = undefined;
    }
  }

  ngOnInit() {
    //this.courses$ = this.coursesService.loadCourses();
    this.coursesService.loadCourses().subscribe(list => this.courses = list);
    this.loaded = true;
    console.log("ngOnInit()");
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
