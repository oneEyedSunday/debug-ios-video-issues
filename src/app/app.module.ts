import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxMasonryModule } from 'ngx-masonry';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { Components } from './components';
import * as fromContainers from './containers';
import { SanitizePipe } from './pipes/sanitize.pipe';

import { ApiService } from './services/mock-api';

@NgModule({
  declarations: [
    AppComponent,
    ...Components,
    ...fromContainers.containers,
    SanitizePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgxMasonryModule,
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
