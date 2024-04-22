export class Etudiant {
  constructor(
    public piecedidentite: string,
    public numeropieceidentite: string,
    public etudiantname: string,
    public lastname: string,
    public niveau: string,
    public parcours: string,
    public email: string,
    public phone: number,
    public genre: string,
    public nationalite: string,
    public gouvernorat: string,
    public institut: string,
    public diplome: string,
    public ref: string,
    public dateDebut: Date,
    public dateFin: Date,
    public duree: number,
    public Debut: Date,
    public Fin: Date,
    public dureej: number,
    public dureem: number,
    public subscribe: boolean
  ) {}
}
