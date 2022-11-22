import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  animate, style, transition, trigger, state, keyframes, stagger, query, group, animateChild
} from "@angular/animations";
import { getAnimations } from './side-bar.animations';
@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
  animations: [getAnimations(),
  trigger('animateContentSideBar', [
    transition(':enter', [
      style({ opacity: 0 }),
      animate('0.2s', style({ opacity: 1 }),)
    ]),
    transition(':leave', [
      animate('0.1s', style({ opacity: 0 }),)
    ]),
  ]),
  ]
})
export class SideBarComponent {
  path: string = ''
  isHide: boolean = true
  tab = [{ path: '/home', icon: "dashboard", word: 'Dashboard' }, { path: '/bank', icon: "device_hub", word: 'Connect to bank' }, { path: '/logout', icon: "logout", word: 'Log out' }]
  test = 'hide'
  constructor(private router: Router) {
    setTimeout(() => {
      this.path = this.router.url;
    }, 50);
  }

  redirectTo(path: string) {
    this.router.navigate([path])
    setTimeout(() => {
      this.path = this.router.url;
    }, 50);
  }

  getUrl() {
    let tabstring = window.location.href.split('/')
    this.path = tabstring[tabstring.length - 1]
  }

  changeTest() {
    if (this.test === 'hide') {
      this.test = 'show'
      return
    }
    this.test = 'hide'
  }
}

