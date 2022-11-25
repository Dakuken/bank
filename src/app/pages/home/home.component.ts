import { Component, OnInit } from '@angular/core';
import Transaction from 'src/app/interface/transaction.interface';
import { TransactionDataService } from 'src/app/services/transaction-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  transactions: Transaction[] = []
  yesterDay: string = ''
  isLoaded: boolean = false

  constructor(private transactService: TransactionDataService) { }

  ngOnInit() {
    let tenDayAgo = new Date()
    let yesterDay = new Date()
    tenDayAgo.setDate(tenDayAgo.getDate() - 10)
    yesterDay.setDate(tenDayAgo.getDate() - 1)
    let date = `${tenDayAgo.getFullYear()}-${tenDayAgo.getMonth() + 1}-${tenDayAgo.getDate()}`
    this.yesterDay = `${yesterDay.getFullYear()}-${yesterDay.getMonth() + 1}-${yesterDay.getDate()}`
    this.transactService.getFromTransac(date).then(res => {
      this.transactions = res,
        setTimeout(() => {
          this.isLoaded = true
        }, 2000);
    })
  }

}
