import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SlidesModule } from './slides/slides.module';
import { ComponentSlidesModule } from './components-slides/components-slides.module';
import { SlidesDirective } from './slides/slides.directive';
import { MaterialModule, MdButtonModule, MdCardModule, MdInputModule, MdListModule } from '@angular/material';
import { MarkdownToHtmlModule } from 'ng2-markdown-to-html';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    SlidesModule,
    ComponentSlidesModule,
    MarkdownToHtmlModule.forRoot(),
    MdButtonModule,
    MdInputModule,
    MdListModule,
    MdCardModule
  ],
  declarations: [
    AppComponent,
    SlidesDirective
  ],
  providers: [],
  entryComponents: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
