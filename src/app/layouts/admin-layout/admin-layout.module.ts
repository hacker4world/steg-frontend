import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AdminLayoutRoutes } from "./admin-layout.routing";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatRippleModule } from "@angular/material/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatSelectModule } from "@angular/material/select";
import { DemandesComponent } from "../../demandes/demandes.component";
import { StagieresComponent } from "../../stagieres/stagieres.component";
import { GroupesComponent } from "../../groupes/groupes.component";
import { ParametresComponent } from "../../parametres/parametres.component";
import { HistoriqueComponent } from "../../historique/historique.component";
import { SweetAlert2Module } from "@sweetalert2/ngx-sweetalert2";
import { SigninComponent } from "../../signin/signin.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    SweetAlert2Module.forRoot(),
  ],
  declarations: [
    GroupesComponent,
    StagieresComponent,
    ParametresComponent,

    DemandesComponent,
    HistoriqueComponent,
  ],
})
export class AdminLayoutModule {}
