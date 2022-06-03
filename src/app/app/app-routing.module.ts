import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {MasterComponent} from "@app/app/master/master.component";

const routes: Routes = [
  {
    path: '',
    component: MasterComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'posts',
        loadChildren: () => import('@app/post/post.module')
          .then(m => m.PostModule),
      },
      {
        path: 'errors',
        loadChildren: () => import('@app/error/error.module')
          .then(m => m.ErrorModule),
      },
      // {
      //   path: '**',
      //   loadChildren: () => import('@app/error/error.module')
      //     .then(m => m.ErrorModule),
      // },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
