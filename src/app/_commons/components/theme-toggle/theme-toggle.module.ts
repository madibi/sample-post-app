import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeToggleComponent } from './theme-toggle.component';
import {IconModule} from "@commons/components/icon/icon.module";

@NgModule({
  declarations: [
    ThemeToggleComponent
  ],
  exports: [
    ThemeToggleComponent
  ],
    imports: [
        CommonModule,
        IconModule,
        IconModule
    ]
})
export class ThemeToggleModule { }
