import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';

const routes:Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: ':id',
    component: DetailComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
