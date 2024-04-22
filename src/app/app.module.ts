import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app.routing";
import { ComponentsModule } from "./components/components.module";
import { AppComponent } from "./app.component";
import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { SigninComponent } from "./signin/signin.component";
import { RegisterComponent } from "./register/register.component";
import { CreerDemandeComponent } from "./creer-demande/creer-demande.component";
import { AccueilComponent } from "./accueil/accueil.component";
import { MatButtonModule } from "@angular/material/button";
import { HistoriqueStegComponent } from "./historique-steg/historique-steg.component";
import { ReglementsComponent } from "./reglements/reglements.component";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { HomeNavbarComponent } from "./components/home-navbar/home-navbar.component";
import { SweetAlert2Module } from "@sweetalert2/ngx-sweetalert2";
import { AlertComponent } from "./components/alert/alert.component";
import { EspaceStagiereComponent } from './espace-stagiere/espace-stagiere.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    MatButtonModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    SweetAlert2Module.forRoot(),
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    SigninComponent,
    RegisterComponent,
    CreerDemandeComponent,
    AccueilComponent,
    HistoriqueStegComponent,
    ReglementsComponent,
    HomeNavbarComponent,
    AlertComponent,
    EspaceStagiereComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
