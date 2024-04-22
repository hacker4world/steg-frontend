import { Component, OnInit, ViewChild } from "@angular/core";
import { Groupe } from "../data/groupes";
import { SwalComponent } from "@sweetalert2/ngx-sweetalert2";
import { GroupesService } from "./groupes.service";

@Component({
  selector: "app-groupes",
  templateUrl: "./groupes.component.html",
  styleUrls: ["./groupes.component.css"],
})
export class GroupesComponent implements OnInit {
  @ViewChild("groupeCree")
  public readonly creeSwal!: SwalComponent;

  @ViewChild("groupeModifie")
  public readonly modifieSwal!: SwalComponent;

  @ViewChild("groupeEfface")
  public readonly effaceSwal!: SwalComponent;

  @ViewChild("tacheAjoute")
  public readonly tacheSwal!: SwalComponent;

  public groupeSelectionne: Groupe;

  public groupeMembres: any[];

  public groupeTaches: any[];

  public groupes: Groupe[];

  public tachesAffiche: boolean = false;

  public nomGroupe: string = "";
  public membresPourAjouter: any[] = [];

  public stagierePourAjouter = {
    nom: "",
    prenom: "",
    numTel: "",
  };

  public nomTache: string = "";
  public dateTache: string = "";

  public groupeNom: string = "";

  constructor(private readonly groupesService: GroupesService) {
    this.groupesService.afficherGroupes().subscribe((data: any) => {
      this.groupes = data;
    });
  }

  ngOnInit(): void {}

  public changerGroupe(id: number) {
    let groupe = this.groupes.find((g) => g.idGroupe === id);
    this.groupeSelectionne = groupe!;
    this.groupesService
      .afficherGroupeMembres(this.groupeSelectionne.idGroupe)
      .subscribe((data: any) => {
        this.groupeMembres = data;
      });
    this.groupesService
      .afficherGroupeTaches(this.groupeSelectionne.idGroupe)
      .subscribe((data: any) => {
        this.groupeTaches = data.taches;
      });
  }

  public ajouterMembre() {
    this.membresPourAjouter.push({
      nom: this.stagierePourAjouter.nom,
      prenom: this.stagierePourAjouter.prenom,
      numTel: this.stagierePourAjouter.numTel,
    });
    this.stagierePourAjouter.nom = "";
    this.stagierePourAjouter.prenom = "";
    this.stagierePourAjouter.numTel = "";
  }

  public afficherTaches(afficher: boolean) {
    this.tachesAffiche = afficher;
  }

  public creerGroupe() {
    this.groupesService
      .creerGroupe(this.nomGroupe, this.membresPourAjouter)
      .subscribe((data: any) => {
        this.groupes.push(data);
        this.membresPourAjouter = [];
      });
    this.creeSwal.fire();
  }
  public modifierGroupe(id) {
    this.modifieSwal.fire();
  }

  public supprimerGroupe(id) {
    this.groupesService.effacerGroupe(id).subscribe(() => {
      this.groupes = this.groupes.filter((g) => g.idGroupe != id);
    });
    this.effaceSwal.fire();
  }

  public ajouterTache() {
    this.groupesService
      .ajouterTache(
        this.nomTache,
        this.dateTache,
        this.groupeSelectionne.idGroupe
      )
      .subscribe((data) => {
        this.groupeTaches.push(data);
        this.tacheSwal.fire();
      });
  }

  public supprimerTache(id: number) {
    this.groupesService.supprimerTache(id).subscribe(() => {
      this.groupeTaches = this.groupeTaches.filter((t) => t.idTache != id);
    });
  }

  public effacerMembre(idMembre: number) {
    this.groupesService.effacerMembre(idMembre).subscribe(() => {
      let groupe = this.groupes.find(
        (g) => g.idGroupe == this.groupeSelectionne.idGroupe
      );
      groupe!.membres--;
      this.groupeMembres = this.groupeMembres.filter(
        (m) => m.idMembre != idMembre
      );
    });
  }

  public modifierNomGroupe() {
    this.groupesService
      .modifierGroupe(this.groupeSelectionne.idGroupe, this.groupeNom)
      .subscribe(() => {
        this.modifieSwal.fire();
        this.groupes = this.groupes.map((groupe) => {
          if (groupe.idGroupe == this.groupeSelectionne.idGroupe)
            return {
              ...groupe,
              nom: this.groupeNom,
            };
          else return groupe;
        });
      });
  }
}
