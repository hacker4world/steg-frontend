export enum Specialite {
  DSI = "Development",
  RSI = "Reseau",
  SEM = "Systemes embarque",
}

export enum Identite {
  CIN = "carte identite",
  PASSPORT = "passport",
}

export type DemandeStage = {
  idDemande: number;
  nom: string;
  prenom: string;
  tel: string;
  typeIdentite: Identite;
  numIdentite: string;
  institut: string;
  typeStage: string;
  specialite: Specialite;
  dateDebut: string;
  dateFin: string;
  imageCinAvant: string;
  imageCinAriere: string;
  anne: string;
};

export const listeDemandes: DemandeStage[] = [
  {
    idDemande: 0,
    nom: "Ahmed",
    prenom: "Maamouri",
    institut: "ISET Rades",
    tel: "50555478",
    typeStage: "initiation",
    numIdentite: "145787777",
    dateDebut: "11/01/2024",
    dateFin: "04/02/2024",
    imageCinAvant: "",
    imageCinAriere: "",
    typeIdentite: Identite.CIN,
    specialite: Specialite.DSI,
    anne: "2024",
  },
  {
    idDemande: 1,
    nom: "Omar",
    prenom: "Ben slimane",
    institut: "ISET Beja",
    tel: "24785441",
    typeStage: "initiation",
    numIdentite: "14578854122",
    dateDebut: "11/01/2024",
    dateFin: "04/02/2024",
    imageCinAvant: "",
    imageCinAriere: "",
    typeIdentite: Identite.CIN,
    specialite: Specialite.RSI,
    anne: "2024",
  },
  {
    idDemande: 2,
    nom: "Yassine",
    prenom: "Arfaoui",
    institut: "ISET Charguia",
    tel: "50555478",
    typeStage: "perfectionnement",
    numIdentite: "14578854122",
    dateDebut: "11/01/2024",
    dateFin: "04/02/2024",
    imageCinAvant: "",
    imageCinAriere: "",
    typeIdentite: Identite.CIN,
    specialite: Specialite.RSI,
    anne: "2024",
  },
  {
    idDemande: 3,
    nom: "Aymen",
    prenom: "Misewi",
    institut: "ISET Jendouba",
    tel: "50555478",
    typeStage: "perfectionnement",
    numIdentite: "14578854122",
    dateDebut: "11/01/2024",
    dateFin: "04/02/2024",
    imageCinAvant: "",
    imageCinAriere: "",
    typeIdentite: Identite.CIN,
    specialite: Specialite.SEM,
    anne: "2024",
  },
  {
    idDemande: 4,
    nom: "Haithem",
    prenom: "Manai",
    institut: "ISET Beja",
    tel: "50555478",
    typeStage: "perfectionnement",
    numIdentite: "14578854122",
    dateDebut: "11/01/2024",
    dateFin: "04/02/2024",
    imageCinAvant: "",
    imageCinAriere: "",
    typeIdentite: Identite.CIN,
    specialite: Specialite.DSI,
    anne: "2024",
  },
  {
    idDemande: 4,
    nom: "Aziz",
    prenom: "Ben slimane",
    institut: "ISET Rades",
    tel: "50555478",
    typeStage: "pfe",
    numIdentite: "14578854122",
    dateDebut: "11/01/2024",
    dateFin: "04/02/2024",
    imageCinAvant: "",
    imageCinAriere: "",
    typeIdentite: Identite.CIN,
    specialite: Specialite.DSI,
    anne: "2024",
  },
];
