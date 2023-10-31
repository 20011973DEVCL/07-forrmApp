import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedSideMenuComponent } from './components/shared-side-menu/shared-side-menu.component';



@NgModule({
  declarations: [
    SharedSideMenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    SharedSideMenuComponent
  ]
})
export class SharedModule { }
