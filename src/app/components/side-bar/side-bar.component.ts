import { Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, Route, Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  path = 'home'

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  pouet() {
    console.log(this.path);
    console.log(this.route.url);

  }

}
