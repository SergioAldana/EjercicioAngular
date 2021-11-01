import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Router, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { MenuComponent } from './components/menu/menu.component';
import { SalirComponent } from './components/salir/salir.component';

const router:Routes = [
  {path: '', component:MainComponent},
  {path: 'logout', component:SalirComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MenuComponent,
    SalirComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(router)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
