import {Component} from '@angular/core';
import { Router,NavigationExtras }  from '@angular/router';

@Component({
  selector: 'my-app',
  template: `
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {

}