import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class StagieresService {
  public serverLink = "http://localhost:8080/stagiere";

  constructor(private readonly httpClient: HttpClient) {}

  public afficherStagieres() {
    return this.httpClient.get(this.serverLink + "/stagieres");
  }

  public effacerStagiere(id: number) {
    return this.httpClient.delete(this.serverLink + `/effacer?id=${id}`);
  }

  public afficherParametres() {
    return this.httpClient.get("http://localhost:8080/parametre");
  }
}
