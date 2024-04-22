import { Component } from "@angular/core";
import { SigninService } from "./signin.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-signin",
  templateUrl: "./signin.component.html",
  styleUrls: ["./signin.component.css"],
})
export class SigninComponent {
  public email: string = "";
  public password: string = "";
  public alertMessage: string = "";

  constructor(
    private readonly signinService: SigninService,
    private readonly router: Router
  ) {}

  public login() {
    this.alertMessage = "";
    if (this.validerEmail(this.email) == false) {
      alert("email invalide");
    } else {
      this.signinService.login(this.email, this.password).subscribe(
        (data: any) => {
          localStorage.setItem("user", JSON.stringify(data));
          if (data.role === "admin") this.router.navigate(["/admin"]);
          else this.router.navigate(["/"]);
        },
        (err) => {
          this.alertMessage = err.error.message;
        }
      );
    }
  }

  private validerEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}
