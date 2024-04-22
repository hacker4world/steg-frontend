import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-reglements",
  templateUrl: "./reglements.component.html",
  styleUrls: ["./reglements.component.css"],
})
export class ReglementsComponent implements OnInit {
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
