import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidesDisplayComponent } from './slide-detail.component';

describe('SlidesDisplayComponent', () => {
  let component: SlidesDisplayComponent;
  let fixture: ComponentFixture<SlidesDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlidesDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidesDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
