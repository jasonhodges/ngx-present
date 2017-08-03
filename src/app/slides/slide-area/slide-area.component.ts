import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { SlideItem, SlidesService } from '../slides.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'slide-area',
  template: `
    <ul>
      <li *ngFor="let slideItem of slides | async" (click)="onSelect(slideItem)">
        <span>{{ slideItem.id }}</span> {{ slideItem.slide.title }}
      </li>
    </ul>
  `
})
export class SlideAreaComponent implements OnInit, AfterViewInit {
  @Input() slides: Observable<SlideItem[]>;
  slidesCount: number;

  private _selectedId: number;

  constructor(private _service: SlidesService,
              private _route: ActivatedRoute,
              private _router: Router) { }

  ngOnInit() {
    this.slides = this._route.params
      .switchMap((params: Params) => {
      this._selectedId = +params['id'];
      return this._service.getSlides();
      });
    this._service.getSlides().then((res) => this.slidesCount = res.length);
    this._service.getSlides().then((res) => this.onSelect(res[0]));
  }
  ngAfterViewInit() {
    console.log('slides: ', this.slides);
    console.log('slides length: ', this.slidesCount );
    console.log('_selectedId: ', +this._selectedId);
  }

  onSelect(slideItem?: SlideItem) {
    this._router.navigate(['/slide', slideItem.id]);
  }
}
