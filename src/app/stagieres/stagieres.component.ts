import { Component, OnInit, ViewChild } from "@angular/core";
import { Stagiere } from "../data/stagieres";
import { SwalComponent } from "@sweetalert2/ngx-sweetalert2";
import { StagieresService } from "./stagieres.service";

@Component({
  selector: "app-stagieres",
  templateUrl: "./stagieres.component.html",
  styleUrls: ["./stagieres.component.css"],
})
export class StagieresComponent {
  @ViewChild("stagiereEfface")
  public readonly effaceSwal!: SwalComponent;

  public listeStagieres: Stagiere[];
  public stagieresData: Stagiere[];
  public listInstituts: string[];
  public stagiereSelectionne: Stagiere;
  public institut: string = "tous";
  public typeStage: string = "tous";

  public nombreStagieres = {
    init: 0,
    perf: 0,
    pfe: 0,
  };

  constructor(private readonly stagieresService: StagieresService) {
    this.stagieresService.afficherStagieres().subscribe((data: any) => {
      this.listeStagieres = data.stagieres;
      this.stagieresData = data.stagieres;
      this.nombreStagieres.init = this.listeStagieres.filter(
        (s) => s.typeStage == "initiation"
      ).length;
      this.nombreStagieres.perf = this.listeStagieres.filter(
        (s) => s.typeStage == "perfectionnement"
      ).length;
      this.nombreStagieres.pfe = this.listeStagieres.filter(
        (s) => s.typeStage === "pfe"
      ).length;
    });
  }

  public afficherStagiere(id: number) {
    let stagiere = this.stagieresData.find((s) => s.idStagiere === id);
    console.log(id);
    console.log(this.stagieresData);

    this.stagiereSelectionne = stagiere!;
  }

  public changerInstitut(ins: string) {
    this.institut = ins;
    this.appliquerFiltres();
  }

  public changerTypeStage(type: string) {
    this.typeStage = type;
    this.appliquerFiltres();
  }

  public appliquerFiltres() {
    if (this.institut == "tous" && this.typeStage == "tous")
      this.listeStagieres = this.stagieresData;
    else if (this.institut == "tous" && this.typeStage !== "tous") {
      this.listeStagieres = this.stagieresData.filter(
        (d) => d.typeStage == this.typeStage
      );
    } else if (this.institut !== "tous" && this.typeStage == "tous") {
      this.listeStagieres = this.stagieresData.filter(
        (d) => d.institut == this.institut
      );
    } else {
      this.listeStagieres = this.stagieresData.filter(
        (d) => d.institut == this.institut && d.typeStage == this.typeStage
      );
    }
  }

  public rechercherParNom(nom: string) {
    if (!nom) this.listeStagieres = this.stagieresData;
    else {
      let resultats = this.stagieresData.filter((d) => {
        let nomComplet = `${d.nom} ${d.prenom}`.toLowerCase();
        return nomComplet.includes(nom.toLowerCase());
      });
      this.listeStagieres = resultats;
    }
  }

  public rechercherParCodeIdendite(code: string) {
    if (!code) this.listeStagieres = this.stagieresData;
    else {
      this.listeStagieres = this.stagieresData.filter(
        (d) => d.numIdentite === code
      );
    }
  }

  public effacerStagiere(id: number) {
    this.stagieresService.effacerStagiere(id).subscribe(() => {
      this.stagieresData = this.stagieresData.filter((s) => s.idStagiere != id);
      this.listeStagieres = this.listeStagieres.filter(
        (s) => s.idStagiere != id
      );
    });

    this.effaceSwal.fire();
  }
}
