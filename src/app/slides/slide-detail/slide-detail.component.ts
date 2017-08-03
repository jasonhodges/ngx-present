import {
  AfterViewInit,
  Component, ComponentFactoryResolver, forwardRef, HostListener, Inject, OnInit,
  ViewChild, ViewContainerRef
} from '@angular/core';
import { fadeStateTrigger, flyInOutStateTrigger } from '../../animations';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { SlideItem, SlidesService } from '../slides.service';
import 'rxjs/add/operator/switchMap';
import { SlidesDirective } from '../slides.directive';
import { SlideComponent } from '../slide/slide.component';
import { DclWrapperComponent } from '../../dcl-wrapper.component';

@Component({
  template: `    
    <div *ngIf="slideItem"
         class="slide"
         [ngStyle]="{'backgroundColor': slideItem.slide ? slideItem.slide.bgColor : ''}"
         (keypress)="eventHandler($event)" #appslide>
      <span class="hint">left / right arrows for nav</span>
      <h2>{{ slideItem.slide ? slideItem.slide.title : '' }}</h2>
      <hr class="style15">
      <dcl-wrapper *ngIf="!slideItem.slide.src" [type]="slideItem.component"></dcl-wrapper>
      <markdown-to-html *ngIf="slideItem.slide.src" [src]="slideItem.slide.src" @fadeState></markdown-to-html>
    </div>
  `,
  animations: [
    flyInOutStateTrigger,
    fadeStateTrigger
  ]
})
export class SlideDetailComponent implements OnInit, AfterViewInit {
  slideItem: SlideItem;
  direction;
  @ViewChild('appslide', {read: ViewContainerRef}) target: ViewContainerRef;

  @HostListener('document:keyup') eventHandler() {
    console.log('slide-area: ', event);
    this.direction = event;
    this.loadComponent(this.direction.keyCode);
  }

  constructor(private _route: ActivatedRoute,
              private _router: Router,
              @Inject(forwardRef(() => SlidesService))
              private _service?: SlidesService,
              private _componentFactoryResolver?: ComponentFactoryResolver) { }

  ngOnInit() {
    this._route.params
      .switchMap((params: Params) => this._service.getSlide(+params['id']))
      .subscribe((slideItem: SlideItem) => this.slideItem = slideItem);
  }

  ngAfterViewInit() { }

  loadComponent(code) {
    switch (code) {
      case -1:
        break;
      case 37:
        this.previousSlide().then(res => this.onSelect(res));
        break;
      case 39:
        this.nextSlide().then(res => this.onSelect(res));
        break;
    }
  }

  onSelect(slideItem?: SlideItem) {

    this._router.navigate(['/slide', slideItem.id]);

  }

  nextSlide() {
    return this._service.getSlide(+this.slideItem.id + 1);
  }

  previousSlide() {
    return this._service.getSlide(+this.slideItem.id - 1);
  }

  gotoSlides() {
    let slideId = this.slideItem ? this.slideItem.id : null;
    this._router.navigate(['/slides', { id: slideId }]);
  }
}
