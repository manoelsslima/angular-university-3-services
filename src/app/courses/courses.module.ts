import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CourseCardComponent } from "./course-card/course-card.component";
import { CourseImageComponent } from "./course-image/course-image.component";
import { CoursesService } from "./courses.service";
import { NgxUnlessDirective } from "./directives/ngx-unless.directive";
import { HighlightedDirective } from "./directives/highlighted.directive";

@NgModule({
  declarations: [
    CourseCardComponent,
    CourseImageComponent,
    HighlightedDirective,
    NgxUnlessDirective,
  ],
  imports: [CommonModule],
  providers: [CoursesService],
  exports: [CourseCardComponent, CourseImageComponent],
})
export class CoursesModule {}
