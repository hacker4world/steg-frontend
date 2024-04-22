import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";
import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { SigninComponent } from "./signin/signin.component";
import { RegisterComponent } from "./register/register.component";
import { CreerDemandeComponent } from "./creer-demande/creer-demande.component";
import { AccueilComponent } from "./accueil/accueil.component";
import { HistoriqueStegComponent } from "./historique-steg/historique-steg.component";
import { ReglementsComponent } from "./reglements/reglements.component";
import { EspaceStagiereComponent } from "./espace-stagiere/espace-stagiere.component";

const routes: Routes = [
  {
    path: "",
    component: AccueilComponent,
  },
  {
    path: "historique",
    component: HistoriqueStegComponent,
  },
  {
    path: "reglements",
    component: ReglementsComponent,
  },
  {
    path: "signin",
    component: SigninComponent,
  },
  {
    path: "register",
    component: RegisterComponent,
  },
  {
    path: "demande",
    component: CreerDemandeComponent,
  },
  { path: "espace-stagiere", component: EspaceStagiereComponent },
  {
    path: "admin",
    redirectTo: "admin/demandes",
    pathMatch: "full",
  },
  {
    path: "admin",
    component: AdminLayoutComponent,
    children: [
      {
        path: "",
        loadChildren: () =>
          import("./layouts/admin-layout/admin-layout.module").then(
            (m) => m.AdminLayoutModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true,
    }),
  ],
  exports: [],
})
export class AppRoutingModule {}
