import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CourseCardComponent } from "./course-card/course-card.component";
import { CourseImageComponent } from "./course-image/course-image.component";
import { CoursesService } from "./courses.service";
import { NgxUnlessDirective } from "./directives/ngx-unless.directive";
import { HighlightedDirective } from "./directives/highlighted.directive";
import { FilterByCategoryPipe } from "./filter-by-category.pipe";

@NgModule({
  declarations: [
    CourseCardComponent,
    CourseImageComponent,
    HighlightedDirective,
    NgxUnlessDirective,
    FilterByCategoryPipe,
  ],
  imports: [CommonModule],
  providers: [CoursesService],
  exports: [CourseCardComponent, CourseImageComponent, FilterByCategoryPipe],
})
export class CoursesModule {}
