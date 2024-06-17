import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Attribute,
  ChangeDetectionStrategy,
  Component,
  DoCheck,
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
export class CourseCardComponent implements OnInit, OnDestroy, OnChanges, AfterContentChecked, AfterViewChecked, AfterContentInit, AfterViewInit, DoCheck {
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

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit");
  }

  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked");
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit");
  }

  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked");
    this.course.description = "ngAfterContentChecked"
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges");
  }

  ngOnDestroy(): void {
    console.log("ngOnDestroy");
  }

  ngOnInit() {
    console.log("ngOnInit");
  }

  ngDoCheck(): void {
    console.log("ngDoCheck");
  }

  onSaveClicked(description: string) {
    this.courseEmitter.emit({ ...this.course, description });
  }

  onTitleChange(newTitle: string) {
    this.course.description = newTitle;
  }
}
