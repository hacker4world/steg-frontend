import { Component } from "@angular/core";
import { RegisterService } from "./register.service";
import { HttpErrorResponse } from "@angular/common/http";
import { Router } from "@angular/router";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent {
  constructor(
    private readonly registerService: RegisterService,
    private readonly router: Router
  ) {}

  public alertMessage: string = "";

  public firstname: string = "";
  public lastname: string = "";
  public email: string = "";
  public password: string = "";
  public passwordconfirm: string = "";

  public signup() {
    this.alertMessage = "";
    if (!this.firstname || !this.lastname || !this.email || !this.password) {
      return (this.alertMessage = "tous les champs sont necessaires");
    } else if (this.validerEmail(this.email) == false) {
      return (this.alertMessage = "email invalide");
    } else if (this.password != this.passwordconfirm) {
      return (this.alertMessage = "erreur confirmation de mot de passe");
    }
    this.registerService
      .signup(this.firstname, this.lastname, this.email, this.password)
      .subscribe(
        (data) => {
          localStorage.setItem("user", JSON.stringify(data));
          this.router.navigate(["/"]);
        },
        (error) => {
          this.alertMessage = error.error.message;
        }
      );
  }

  private validerEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}
