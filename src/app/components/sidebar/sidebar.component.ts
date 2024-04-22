import { Component, OnInit } from "@angular/core";

declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  {
    path: "/admin/demandes",
    title: "Demandes de stage",
    icon: "create",
    class: "",
  },
  { path: "/admin/stagieres", title: "Stagieres", icon: "person", class: "" },
  {
    path: "/admin/groupes",
    title: "Groupes",
    icon: "groupe",
    class: "",
  },
  {
    path: "/admin/historique",
    title: "Historique",
    icon: "calendar_month",
    class: "",
  },
  {
    path: "/admin/parametres",
    title: "Parametres",
    icon: "settings",
    class: "",
  },
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"],
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() {}

  ngOnInit() {
    this.menuItems = ROUTES;
  }
  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  }
}
