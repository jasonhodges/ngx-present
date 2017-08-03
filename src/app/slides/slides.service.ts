import { Injectable, Type, Component } from '@angular/core';
import { SlideDetailComponent } from './slide-detail/slide-detail.component';

import { TemplateComponent } from './../components-slides/template.component';

export class Slide {
  constructor(public title?: string,
              public src?: string,
              public bgColor?: string) { }
}

export class SlideItem {
  constructor(public id: number | string,
              public component: Type<any>,
              public slide?: Slide) { }
}

let SLIDES = [
  new SlideItem(1, SlideDetailComponent, {
    title: 'Template Markdown',
    src: 'assets/template.md',
    bgColor: ''
  }),
  new SlideItem(2, TemplateComponent, {title: 'Template Component'})
];

const slidesPromise = Promise.resolve(SLIDES);

@Injectable()
export class SlidesService {
  private slidesUrl = 'assets/config.json';

  getSlides() {
    return slidesPromise;
  }

  getSlide(id: number | string) {
    return slidesPromise.then(slides => slides.find(slide => slide.id === +id));
  }
}
