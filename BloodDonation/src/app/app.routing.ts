import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { UserLayoutComponent } from './layouts/user-layout/user-layout.component';

const routes: Routes =[
  {
    path: '',
    redirectTo: 'home-page',
    pathMatch: 'full',
  }, {
    path: '',
    component: UserLayoutComponent,
    children: [
        {
      path: '',
      loadChildren: './layouts/user-layout/user-layout.module#UserLayoutModule'
  }]}
  
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
