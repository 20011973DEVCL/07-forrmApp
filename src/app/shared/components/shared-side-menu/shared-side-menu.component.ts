import { Component } from '@angular/core';

interface MenuItem {
  title: string;
  route: string;
 }

@Component({
  selector: 'app-shared-side-menu',
  templateUrl: './shared-side-menu.component.html',
  styles: [
  ]
})
export class SharedSideMenuComponent {
  public reactiveMenu: MenuItem[] = [
    {title: 'Basicos',    route: './reactive/basic'},
    {title: 'Dinamicos',  route: './reactive/dynamic'},
    {title: 'Switches',   route: './reactive/switches'},
  ];

  public authMenu: MenuItem[] = [
    {title: 'Registro',    route: './auth'},

  ]
}
