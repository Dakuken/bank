import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { HomeComponent } from './pages/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatIconModule } from '@angular/material/icon'
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { BankComponent } from './pages/bank/bank.component';
import { LogOutComponent } from './pages/log-out/log-out.component';
import { SoldeActuelComponent } from './pages/home/components/solde-actuel/solde-actuel.component';
import { DepensesComponent } from './pages/home/components/depenses/depenses.component';
import { HistoriqueComponent } from './pages/historique/historique.component';
@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    HomeComponent,
    BankComponent,
    LogOutComponent,
    SoldeActuelComponent,
    DepensesComponent,
    HistoriqueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
