import { Component, OnInit, ViewChild } from "@angular/core";
import { SwalComponent } from "@sweetalert2/ngx-sweetalert2";
import { ParametresService } from "./parametres.service";

@Component({
  selector: "app-parametres",
  templateUrl: "./parametres.component.html",
  styleUrls: ["./parametres.component.css"],
})
export class ParametresComponent implements OnInit {
  @ViewChild("parametres")
  public readonly parametresSwal!: SwalComponent;

  public initiation: string = "";
  public perfectionnement: string = "";
  public pfe: string = "";

  constructor(private readonly parametresService: ParametresService) {
    this.parametresService.afficherParametres().subscribe((data: any) => {
      this.initiation = data.parametre.stageInitiation;
      this.perfectionnement = data.parametre.stagesPerfectionnement;
      this.pfe = data.parametre.stagesPfe;
    });
  }

  ngOnInit(): void {}

  public appliquerParametres() {
    this.parametresSwal.fire();
    this.parametresService
      .modifierParametres(
        Number(this.initiation),
        Number(this.perfectionnement),
        Number(this.pfe)
      )
      .subscribe(() => {
        this.parametresSwal.fire();
      });
  }
}
