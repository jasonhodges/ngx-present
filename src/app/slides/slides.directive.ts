import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[app-slides]'
})
export class SlidesDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
