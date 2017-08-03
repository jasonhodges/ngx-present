import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TemplateComponent } from './template.component';
import {
  MaterialModule,
  MdButtonModule,
  MdCardModule,
  MdInputModule,
  MdListModule,
  MdSliderModule
} from '@angular/material';
import { MarkdownToHtmlModule } from 'ng2-markdown-to-html';

@NgModule({
  imports: [
    CommonModule,
    MarkdownToHtmlModule.forRoot(),
    ReactiveFormsModule,
    MdButtonModule,
    MdInputModule,
    MdListModule,
    MdCardModule,
    MdSliderModule
  ],
  declarations: [
    TemplateComponent,
  ],
  exports: [],
  entryComponents: [
    TemplateComponent,
  ]
})
export class ComponentSlidesModule {}
