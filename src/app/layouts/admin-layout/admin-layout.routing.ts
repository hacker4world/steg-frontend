import { Routes } from "@angular/router";
import { DemandesComponent } from "../../demandes/demandes.component";
import { StagieresComponent } from "../../stagieres/stagieres.component";
import { GroupesComponent } from "../../groupes/groupes.component";
import { ParametresComponent } from "../../parametres/parametres.component";
import { HistoriqueComponent } from "../../historique/historique.component";
import { SigninComponent } from "../../signin/signin.component";
export const AdminLayoutRoutes: Routes = [
  { path: "demandes", component: DemandesComponent },
  { path: "stagieres", component: StagieresComponent },
  { path: "groupes", component: GroupesComponent },
  { path: "parametres", component: ParametresComponent },
  { path: "historique", component: HistoriqueComponent },
  { path: "login", component: SigninComponent },
];
