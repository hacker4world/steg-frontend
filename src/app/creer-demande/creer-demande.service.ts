import { Injectable } from "@angular/core";

import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class CreerDemandeService {
  public serverLink: string = "http://localhost:8080/stagiere/creer-demande";

  constructor(private readonly httpClient: HttpClient) {}

  public creerDemande(
    pieceIdentite: string,
    codeIdentite: string,
    niveauEtude: string,
    typeStage: string,
    specialite: string,
    numTel: string,
    nationalite: string,
    gouvernorat: string,
    institut: string,
    diplome: string,
    dateDebut: string,
    dateFin: string,
    jours: string,
    nom: string,
    prenom: string
  ) {
    let user = JSON.parse(localStorage.getItem("user")!);
    return this.httpClient.put(this.serverLink, {
      pieceIdentite,
      codeIdentite,
      niveauEtude,
      typeStage,
      specialite,
      numTel,
      nationalite,
      gouvernorat,
      institut,
      diplome,
      dateDebut,
      dateFin,
      jours,
      compte: user.idCompte,
      nom,
      prenom,
    });
  }
}
