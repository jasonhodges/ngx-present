# AngularAnimations

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

Run `ng serve --hmr` for a dev server with Hot Module Replacement enabled.  
## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Build and Deploy

`npm run publish`
Publish to Github pages made available via [angular-cli-ghpages](https://www.npmjs.com/package/angular-cli-ghpages). Check out `package.json` for config string.

## Structure

```
.
├── angular-icon.png
├── app
│   ├── animations.ts // file for export Angular animations
│   ├── app-routing.module.ts
│   ├── app.component.html
│   ├── app.component.scss
│   ├── app.component.spec.ts
│   ├── app.component.ts
│   ├── app.module.ts
│   ├── components-slides // any component slides should be kept here
│   │   ├── components-slides.module.ts
│   │   ├── components-slides.scss
│   │   └── template.component.ts // component slide template
│   ├── dcl-wrapper.component.ts
│   ├── default-request-options.service.ts
│   ├── selective-preloading-strategy.ts
│   └── slides
│       ├── slide
│       │   └── slide.component.ts // SlideComponent interface
│       ├── slide-area
│       │   ├── slide-area.component.spec.ts
│       │   └── slide-area.component.ts
│       ├── slide-detail
│       │   ├── slide-detail.component.spec.ts
│       │   └── slide-detail.component.ts
│       ├── slides-routing.module.ts
│       ├── slides.directive.spec.ts
│       ├── slides.directive.ts
│       ├── slides.module.ts
│       └── slides.service.ts // slides should be added here
├── app-theme.scss
├── assets // any markdown slides should be kept here
│   ├── config.json
│   ├── favicon.ico // Angular favicon for the main slide hr
│   ├── resources // any slide images should be kept here
│   │   └── angular.png
│   └── template.md // markdown slide template
├── environments
│   ├── environment.hmr.ts
│   ├── environment.prod.ts
│   └── environment.ts
├── favicon.ico
├── hmr.ts // Hot Module Reloading configuration
├── index.html // entry file
├── main.ts
├── palette.sass
├── polyfills.ts
├── styles.scss
├── test.ts
├── tsconfig.app.json
├── tsconfig.spec.json
└── typings.d.ts
```
