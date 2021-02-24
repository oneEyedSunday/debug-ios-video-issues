import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import * as fromContainers from './containers';


const routes: Routes = [
  {
    path: 'onload',
    component: fromContainers.BeforeOnloadTestComponent
  },
  {
    path: 'feed-test',
    component: fromContainers.FeedTestComponent,
  },
  {
    path: '**',
    redirectTo: 'feed-test',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
