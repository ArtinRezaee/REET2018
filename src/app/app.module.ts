import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import {ScrollToModule} from '@nicky-lenaers/ngx-scroll-to';
import {LayoutModule} from '@angular/cdk/layout';
import {AvatarModule, AvatarConfig} from 'ngx-avatar';
import {MatTableModule} from '@angular/material/table';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';


const appRoutes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: '**',  redirectTo: ''}
];

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes,
    ),
    MatSidenavModule,
    MatListModule,
    MatDividerModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    ScrollToModule.forRoot(),
    LayoutModule,
    AvatarModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
