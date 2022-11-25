import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Transaction from '../interface/transaction.interface';
@Injectable({
  providedIn: 'root'
})
export class TransactionDataService {

  constructor(private http: HttpClient) {
  }

  getAllTransac(): Promise<Transaction[]> {
    return new Promise((resolve) => {
      let data: Transaction[] = []
      let get = this.http.get("http://localhost:3000/transac").subscribe((res: any) => {
        if (!res) return
        data = res.transactions.booked
        get.unsubscribe()
        get.unsubscribe()
        resolve(data)
      })
    })
  }

  getFromTransac(date: string): Promise<Transaction[]> {
    return new Promise((resolve) => {
      let data: Transaction[] = []
      if (!this.verifDate(date)) {
        return
      }
      let get = this.http.get(`http://localhost:3000/transac/from/${date}`).subscribe((res: any) => {
        if (!res) return
        data = res
        get.unsubscribe()
        resolve(data)
      })
    })
  }

  getToTransac(date: string): Promise<Transaction[]> {
    return new Promise((resolve) => {
      let data: Transaction[] = []
      if (!this.verifDate(date)) {
        return
      }
      let get = this.http.get(`http://localhost:3000/transac/to/${date}`).subscribe((res: any) => {
        if (!res) return
        data = res
        get.unsubscribe()
        resolve(data)
      })
    })
  }

  getFromToTransac(date: string): Promise<Transaction[]> {
    return new Promise((resolve) => {
      let data: Transaction[] = []
      let dates = date.split('/')
      if (!this.verifDate(dates[0]) || !this.verifDate(dates[1]))
        return
      let get = this.http.get(`http://localhost:3000/transac/fromTo/${date}`).subscribe((res: any) => {
        if (!res) return
        data = res
        get.unsubscribe()
        resolve(data)
      })
    })
  }

  verifDate(date: string): boolean {
    return /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/i.test(date);
  }
}
