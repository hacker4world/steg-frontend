import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-accueil",
  templateUrl: "./accueil.component.html",
  styleUrls: ["./accueil.component.css"],
})
export class AccueilComponent implements OnInit {
  public loggedIn: boolean = false;

  constructor(private readonly router: Router) {}

  ngOnInit(): void {
    let user = localStorage.getItem("user");
    if (!user) this.loggedIn = false;
    else this.loggedIn = true;
  }

  public logout() {
    localStorage.removeItem("user");
    this.router.navigate(["signin"]);
  }
}
