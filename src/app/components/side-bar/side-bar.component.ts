import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent {
  path: string = ''
  tab = [{ path: '/home', icon: "dashboard", word: 'Dashboard' }, { path: '/bank', icon: "device_hub", word: 'Connect to bank' }, { path: '/logout', icon: "logout", word: 'Log out' }]

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
}

