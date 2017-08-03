import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SlidesRoutingModule } from './slides-routing.module';
import { SlideAreaComponent } from './slide-area/slide-area.component';
import { SlideDetailComponent } from './slide-detail/slide-detail.component';
import { SlidesService } from './slides.service';

import { MarkdownToHtmlModule } from 'ng2-markdown-to-html';
import { DclWrapperComponent } from '../dcl-wrapper.component';
import { MaterialModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    SlidesRoutingModule,
    MarkdownToHtmlModule.forRoot(),
    MaterialModule
  ],
  declarations: [
    SlideAreaComponent,
    SlideDetailComponent,
    DclWrapperComponent
  ],
  entryComponents: [ ],
  providers: [
    SlidesService
  ]
})
export class SlidesModule { }
