export type Groupe = {
  idGroupe: number;
  nom: string;
  membres: number;
  membre1?: string;
  membre2?: string;
  membre3?: string;
  membre4?: string;
  membre5?: string;
};

export const groupes: Groupe[] = [
  {
    idGroupe: 0,
    nom: "Groupe 1",
    membres: 4,
    membre1: "Omar Misewi",
    membre2: "Houssem Ayari",
    membre3: "Ahmed Bouthouri",
    membre4: "Yassine Arfaoui",
  },
  {
    idGroupe: 1,
    nom: "Groupe 2",
    membres: 5,
    membre1: "Omar Misewi",
    membre2: "Houssem Ayari",
    membre3: "Ahmed Bouthouri",
    membre4: "Yassine Arfaoui",
    membre5: "Marwa Ben Slimane",
  },
  {
    idGroupe: 2,
    nom: "Groupe 3",
    membres: 4,
    membre1: "Omar Misewi",
    membre2: "Houssem Ayari",
    membre3: "Ahmed Bouthouri",
    membre4: "Yassine Arfaoui",
  },
];
