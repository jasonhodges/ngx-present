import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelectivePreloadingStrategy } from './selective-preloading-strategy';

const routes: Routes = [
  { path: '', redirectTo: '/slides', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      { useHash: true }
    // preloadingStrategy: SelectivePreloadingStrategy
)
  ],
  exports: [RouterModule],
  providers: [
    SelectivePreloadingStrategy
  ]
})
export class AppRoutingModule { }
