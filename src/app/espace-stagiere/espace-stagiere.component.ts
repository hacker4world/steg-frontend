import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-espace-stagiere",
  templateUrl: "./espace-stagiere.component.html",
  styleUrls: ["./espace-stagiere.component.css"],
})
export class EspaceStagiereComponent implements OnInit {
  public routes = ["Etat du demande", "Groupe"];

  public selectedTab: string = "Etat du demande";

  public etatDemande: string = "";

  public groupeIntrouve: boolean = false;

  public groupe: any = {};

  constructor(private readonly httpClient: HttpClient) {}

  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  }

  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem("user"));
    this.httpClient
      .get(`http://localhost:8080/stagiere/voir-demande?nom=${user.nom}`, {
        responseType: "text",
      })
      .subscribe((data) => {
        this.etatDemande = data;
      });
    this.httpClient
      .get(`http://localhost:8080/groupes/voir-groupe?nom=${user.nom}`)
      .subscribe(
        (data) => {
          this.groupe = data;
          this.httpClient
            .get(
              `http://localhost:8080/groupes/afficher/membres?id=${this.groupe.idGroupe}`
            )
            .subscribe((data) => {
              this.groupe.membres = data;
              this.httpClient
                .get(
                  `http://localhost:8080/taches/afficher?id=${this.groupe.idGroupe}`
                )
                .subscribe((data: any) => {
                  this.groupe.taches = data.taches;
                  console.log(this.groupe);
                });
            });
        },
        (erreur) => {
          this.groupeIntrouve = true;
        }
      );
  }

  public changeTab(tab: string): void {
    this.selectedTab = tab;
  }
}
