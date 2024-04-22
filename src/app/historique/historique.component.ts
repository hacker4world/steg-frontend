import { Component, OnInit } from "@angular/core";
import { Stagiere } from "../data/stagieres";
import { historique } from "../data/historique";

@Component({
  selector: "app-historique",
  templateUrl: "./historique.component.html",
  styleUrls: ["./historique.component.css"],
})
export class HistoriqueComponent implements OnInit {
  public historique: Stagiere[];

  public anne: string = "tous";
  public annes: string[];
  public stagiereSelectionne: Stagiere;

  constructor() {
    this.historique = historique;
    this.annes = historique.map((h) => h.anne);
  }

  ngOnInit(): void {}

  public changerAnne(anne: string) {
    this.anne = anne;
    if (this.anne === "tous") {
      this.historique = historique;
    } else this.historique = historique.filter((h) => h.anne === this.anne);
  }

  public rechercherParNom(nom: string) {
    if (!nom) this.historique = historique;
    else {
      let resultats = historique.filter((d) => {
        let nomComplet = `${d.nom} ${d.prenom}`.toLowerCase();
        return nomComplet.includes(nom.toLowerCase());
      });
      this.historique = resultats;
    }
  }

  public rechercherParCodeIdendite(code: string) {
    if (!code) this.historique = historique;
    else {
      this.historique = historique.filter((d) => d.numIdentite === code);
    }
  }

  public changerStagiere(id: number) {
    this.stagiereSelectionne = historique.find((h) => h.idStagiere === id)!;
  }
}
