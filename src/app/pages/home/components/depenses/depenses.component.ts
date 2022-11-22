import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-depenses',
  templateUrl: './depenses.component.html',
  styleUrls: ['./depenses.component.scss']
})
export class DepensesComponent implements OnInit {
  date = new Date();
  hier = this.date.setUTCDate(this.date.getUTCDate() - 1)
  tab = [
    { name: 'Course Carrefour', price: -300, date: this.date },
    { name: 'Achat jeux', price: -30, date: this.date },
    { name: 'Paye du mois', price: 2713.41, date: this.date },
    { name: 'Loyer', price: -745, date: this.hier },
    { name: 'Électricité', price: -174, date: this.hier },
    { name: 'Truc', price: -40, date: this.hier },
    { name: 'Nom personalisé', price: -10, date: this.hier },
    { name: 'Essence', price: -100, date: this.hier },
    { name: 'Essence', price: -1000, date: this.hier },
  ]

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goTo(path: string) {
    this.router.navigate([path])
  }

}
