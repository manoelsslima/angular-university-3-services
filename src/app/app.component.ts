import { Component, Inject } from "@angular/core";
import { Course } from "./model/course";
import { AppConfig, CONFIG_TOKEN } from "./config";
import { COURSES } from "src/db-data";
import { CoursesService } from "./courses/courses.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  courses: Course[] = COURSES;

  constructor(
    private coursesService: CoursesService,
    @Inject(CONFIG_TOKEN) private config: AppConfig
  ) {}

  save(course: Course) {
    this.coursesService
      .saveCourse(course)
      .subscribe(() => console.log("Course saved!"));
  }

  onEditCourse() {
    const course = this.courses[0];
    const newCourse = { ...course, description: "ngOnChanges" }; // cria uma cópia
    this.courses[0] = newCourse;
  }
}
