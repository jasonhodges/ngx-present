import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  Input,
  OnChanges,
  OnDestroy,
  Type,
  ViewChild,
  ViewContainerRef
} from '@angular/core';

@Component({
  selector: 'dcl-wrapper',
  template: `
    <div #target></div>`
})
export class DclWrapperComponent implements OnChanges, AfterViewInit, OnDestroy, AfterContentInit{
  @ViewChild('target', { read: ViewContainerRef }) target: ViewContainerRef;
  @Input() type: Type<Component>;
  cmpRef: ComponentRef<Component>;
  private isViewInitialized = false;

  constructor(private _cfr: ComponentFactoryResolver) { }

  updateComponent() {
    if (!this.isViewInitialized) {
      return;
    }

    if (this.cmpRef) {
      this.cmpRef.destroy();
    }

    let factory = this._cfr.resolveComponentFactory(this.type);
    this.cmpRef = this.target.createComponent(factory);
  }

  ngOnChanges() {
    this.updateComponent();
  }

  ngAfterViewInit() {
    // this.isViewInitialized = true;
    // this.updateComponent();
  }

  ngAfterContentInit() {
    this.isViewInitialized = true;
    this.updateComponent();
  }

  ngOnDestroy() {
    if (this.cmpRef) {
      this.cmpRef.destroy();
    }
  }
}
