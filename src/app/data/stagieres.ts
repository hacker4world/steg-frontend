export enum Specialite {
  DSI = "Development",
  RSI = "Reseau",
  SEM = "Systemes embarque",
}

export enum Identite {
  CIN = "carte identite",
  PASSPORT = "passport",
}

export type Stagiere = {
  idStagiere: number;
  nom: string;
  prenom: string;
  typeIdentite: Identite;
  numIdentite: string;
  specialite?: Specialite;
  tel: string;
  typeStage: string;
  dateDebut: string;
  dateFin: string;
  imageCinAvant: string;
  imageCinAriere: string;
  gouvernorat: string;
  diplome: string;
  adresse: string;
  institut: string;
  nationalite: string;
  email: string;
  anne: string;
};

export const stagieres: Stagiere[] = [
  {
    idStagiere: 0,
    nom: "Ahmed",
    prenom: "Bouthouri",
    typeIdentite: Identite.CIN,
    numIdentite: "11111144",
    tel: "24444555",
    typeStage: "initiation",
    dateDebut: "11/01/2024",
    dateFin: "04/02/2024",
    imageCinAvant: "",
    imageCinAriere: "",
    gouvernorat: "Tunis",
    diplome: "licence",
    adresse: "adresse",
    institut: "ISET Kef",
    nationalite: "Tunisienne",
    email: "email@gmail.com",
    anne: "2024",
  },
  {
    idStagiere: 1,
    nom: "Omar",
    prenom: "Misewi",
    typeIdentite: Identite.CIN,
    numIdentite: "11111144",
    specialite: Specialite.DSI,
    tel: "24444555",
    typeStage: "perfectionnement",
    dateDebut: "11/01/2024",
    dateFin: "04/02/2024",
    imageCinAvant: "",
    imageCinAriere: "",
    gouvernorat: "Tunis",
    diplome: "licence",
    adresse: "adresse",
    institut: "ISET Beja",
    nationalite: "Tunisienne",
    email: "email@gmail.com",
    anne: "2024",
  },
  {
    idStagiere: 2,
    nom: "Houssem",
    prenom: "Ayari",
    typeIdentite: Identite.CIN,
    numIdentite: "11111144",
    institut: "ISET Jendouba",
    specialite: Specialite.RSI,
    tel: "24444555",
    typeStage: "perfectionnement",
    dateDebut: "11/01/2024",
    dateFin: "04/02/2024",
    anne: "2024",
    imageCinAvant: "",
    imageCinAriere: "",
    gouvernorat: "Tunis",
    nationalite: "Tunisienne",
    adresse: "adresse",
    diplome: "licence",
    email: "email@gmail.com",
  },
];
