import { Component, OnInit, ViewChild } from "@angular/core";
import { DemandeStage } from "../data/demandes";
import { DemandesService } from "./demandes.service";
import { SwalComponent } from "@sweetalert2/ngx-sweetalert2";

@Component({
  selector: "app-demandes",
  templateUrl: "./demandes.component.html",
  styleUrls: ["./demande.component.css"],
})
export class DemandesComponent {
  @ViewChild("demandeAccepte")
  public readonly accepteSwal!: SwalComponent;
  @ViewChild("demandeRefuse")
  public readonly refuseSwal!: SwalComponent;

  public demandesData: DemandeStage[] = [];
  public demandes: DemandeStage[] = [];
  public institus: string[] = [];
  public institut: string = "tous";
  public typeStage: string = "tous";
  public nbrDemandes = {
    initiation: 0,
    perfectionnement: 0,
    pfe: 0,
  };
  public demandeSelectionne: DemandeStage;
  constructor(private readonly demandeService: DemandesService) {
    this.demandeService.afficherDemandes().subscribe((data: any) => {
      this.demandesData = data.demandes as DemandeStage[];
      this.demandes = data.demandes as DemandeStage[];
      this.institus = this.demandesData.map((d) => d.institut);
      this.demandesData.forEach((demande) => {
        if (demande.typeStage == "initiation") this.nbrDemandes.initiation++;
        else if (demande.typeStage == "perfectionnement")
          this.nbrDemandes.perfectionnement++;
        else this.nbrDemandes.pfe++;
      });
    });
  }

  public changerInstitut(ins: string) {
    this.institut = ins;
    this.appliquerFiltres();
  }

  public changerType(type: string) {
    this.typeStage = type;
    this.appliquerFiltres();
  }

  public appliquerFiltres() {
    if (this.institut == "tous" && this.typeStage == "tous")
      this.demandes = this.demandesData;
    else if (this.institut == "tous" && this.typeStage !== "tous") {
      this.demandes = this.demandesData.filter(
        (d) => d.typeStage == this.typeStage
      );
    } else if (this.institut !== "tous" && this.typeStage == "tous") {
      this.demandes = this.demandesData.filter(
        (d) => d.institut == this.institut
      );
    } else {
      this.demandes = this.demandesData.filter(
        (d) => d.institut == this.institut && d.typeStage == this.typeStage
      );
    }
  }

  public changerDemande(id: number) {
    this.demandeSelectionne = this.demandes.find((d) => d.idDemande == id)!;
  }

  public rechercherParNom(nom: string) {
    if (!nom) this.demandes = this.demandesData;
    else {
      let resultats = this.demandesData.filter((d) => {
        let nomComplet = `${d.nom} ${d.prenom}`.toLowerCase();
        return nomComplet.includes(nom.toLowerCase());
      });
      this.demandes = resultats;
    }
  }

  public rechercherParCodeIdendite(code: string) {
    if (!code) this.demandes = this.demandesData;
    else {
      this.demandes = this.demandesData.filter((d) => d.numIdentite === code);
    }
  }

  public accepterDemande(id: number) {
    this.demandeService.accepterDemande(id).subscribe(
      () => {
        this.demandesData = this.demandesData.filter((d) => d.idDemande != id);
        this.demandes = this.demandes.filter((d) => d.idDemande != id);
        this.accepteSwal.fire();
      },
      function (err) {
        console.log(err.error.message);
      }
    );
  }

  public refuserDemande(id: number) {
    this.demandeService.refuserDemande(id).subscribe(
      () => {
        this.demandesData = this.demandesData.filter((d) => d.idDemande != id);
        this.demandes = this.demandes.filter((d) => d.idDemande != id);
        this.refuseSwal.fire();
      },
      function (err) {
        console.log(err.error.message);
      }
    );
  }
}
