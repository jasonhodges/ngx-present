import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SlideAreaComponent } from './slide-area/slide-area.component';
import { SlideDetailComponent } from './slide-detail/slide-detail.component';

const slidesRoutes: Routes = [
  { path: 'slides', component: SlideAreaComponent },
  { path: 'slide/:id', component: SlideDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(slidesRoutes)],
  exports: [RouterModule]
})
export class SlidesRoutingModule { }
