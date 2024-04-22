import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class DemandesService {
  public serverLink = "http://localhost:8080/stagiere/demandes";

  constructor(private readonly httpClient: HttpClient) {}

  public afficherDemandes() {
    return this.httpClient.get(this.serverLink);
  }

  public accepterDemande(id: number) {
    return this.httpClient.put(this.serverLink + "/accepter", {
      idDemande: id,
    });
  }

  public refuserDemande(id: number) {
    return this.httpClient.post(this.serverLink + "/refuser", {
      idDemande: id,
    });
  }
}
