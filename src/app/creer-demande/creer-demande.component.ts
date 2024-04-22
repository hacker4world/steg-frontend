import { Component, OnInit, ViewChild } from "@angular/core";
import { CreerDemandeService } from "./creer-demande.service";
import { Router } from "@angular/router";
import { SwalComponent } from "@sweetalert2/ngx-sweetalert2";

@Component({
  selector: "app-creer-demande",
  templateUrl: "./creer-demande.component.html",
  styleUrls: ["./creer-demande.component.css"],
})
export class CreerDemandeComponent implements OnInit {
  @ViewChild("dialog")
  public readonly mySwal!: SwalComponent;
  public pieceIdentite: string = "";
  public codeIdentite: string = "";
  public niveauEtude: string = "";
  public specialite: string = "";
  public numTel: string = "";
  public nationalite: string = "";
  public gouvernorat: string = "";
  public institut: string = "";
  public diplome: string = "";
  public dateDebut: string = "";
  public dateFin: string = "";
  public jours: string = "";
  public typeStage: string = "";
  public nom: string = "";
  public prenom: string = "";

  public erreur: string = "";
  public accepter: boolean = false;

  constructor(
    private readonly creerDemandeService: CreerDemandeService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {}

  public accepterReglements(value: boolean) {
    this.accepter = value;
  }

  public envoyerDemande() {
    this.erreur = "";
    console.log(this.nom);
    console.log(this.prenom);
    // check if the above props are not empty
    if (this.areAllPropsNotEmpty()) {
      if (this.accepter == false) {
        return (this.erreur = "Vous devez accepter les reglements");
      }

      this.creerDemandeService
        .creerDemande(
          this.pieceIdentite,
          this.codeIdentite,
          this.niveauEtude,
          this.typeStage,
          this.specialite,
          this.numTel,
          this.nationalite,
          this.gouvernorat,
          this.institut,
          this.diplome,
          this.dateDebut,
          this.dateFin,
          this.jours,
          this.nom,
          this.prenom
        )
        .subscribe(
          () => {
            this.mySwal.fire();
            this.router.navigate(["/"]);
          },
          (err) => {
            this.erreur = err.error.message;
          }
        );
    } else {
      this.erreur = "Tous les champs sont obligatoires";
    }
  }

  private areAllPropsNotEmpty(): boolean {
    // Check if all properties are not empty
    return (
      this.pieceIdentite !== "" &&
      this.codeIdentite !== "" &&
      this.niveauEtude !== "" &&
      this.specialite !== "" &&
      this.numTel !== "" &&
      this.nationalite !== "" &&
      this.gouvernorat !== "" &&
      this.institut !== "" &&
      this.diplome !== "" &&
      this.dateDebut !== "" &&
      this.dateFin !== "" &&
      this.jours !== "" &&
      this.typeStage !== "" &&
      this.nom !== "" &&
      this.prenom !== ""
    );
  }

  public logout() {
    localStorage.removeItem("user");
    this.router.navigate(["signin"]);
  }
}
