import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class SigninService {
  public serverLink = "http://localhost:8080/compte/login";

  constructor(private readonly httpClient: HttpClient) {}

  public login(email: string, password: string) {
    return this.httpClient.post(this.serverLink, { email, password });
  }
}
