import {
  AfterContentChecked,
  AfterViewChecked,
  Attribute,
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from "@angular/core";
import { Course } from "../model/course";
import { CoursesService } from "../services/courses.service";

@Component({
  selector: "course-card",
  templateUrl: "./course-card.component.html",
  styleUrls: ["./course-card.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseCardComponent implements OnInit, OnDestroy, OnChanges, AfterContentChecked, AfterViewChecked {
  @Input()
  course: Course;

  @Input()
  cardIndex: number;

  @Output("courseChanged")
  courseEmitter = new EventEmitter<Course>();

  constructor(private coursesService: CoursesService,
              @Attribute('type') private tipo: string) {
    console.log('constructor');
  }

  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked");
  }

  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked");
    this.course.description = "ngAfterContentChecked"
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges", changes);
  }

  ngOnDestroy(): void {
    console.log("ngOnDestroy");
  }

  ngOnInit() {
    console.log("ngOnInit");
  }

  onSaveClicked(description: string) {
    this.courseEmitter.emit({ ...this.course, description });
  }

  onTitleChange(newTitle: string) {
    this.course.description = newTitle;
  }
}
