import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ErrorsComponent} from "@app/error/errors/errors.component";
import {Err404Component} from "@app/error/err404/err404.component";

const routes: Routes = [
  {
    path: '',
    component: ErrorsComponent,
    children: [
      {
        path: '404',
        component: Err404Component,
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ErrorRoutingModule { }
