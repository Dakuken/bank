import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BankComponent } from './pages/bank/bank.component';
import { HomeComponent } from './pages/home/home.component';
import { LogOutComponent } from './pages/log-out/log-out.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'bank', component: BankComponent },
  { path: 'logout', component: LogOutComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
