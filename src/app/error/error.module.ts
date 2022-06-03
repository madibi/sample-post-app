import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Err404Component } from './err404/err404.component';
import { ErrorsComponent } from './errors/errors.component';
import { ErrorRoutingModule } from './error-routing.module';

@NgModule({
  declarations: [
    ErrorsComponent,
    Err404Component,
  ],
  imports: [
    CommonModule,
    ErrorRoutingModule
  ]
})
export class ErrorModule { }
