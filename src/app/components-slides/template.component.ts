import { Component } from '@angular/core';

@Component({
  template: `
    <div class="col-right">
      <h2>{{title}}</h2>
    </div>
    <div class="col-left">
      <markdown-to-html [src]="'./src/app/components-slides/template.component.ts'"></markdown-to-html>
    </div>
  `,
  styleUrls: ['./components-slides.scss'],
  animations: []
})
export class TemplateComponent {
  title = 'Template Component';
}
