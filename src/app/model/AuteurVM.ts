import { LivreVM } from '../model/LivreVM';

export interface AuteurVM{
    id : number;
    nom : string;
    prenom: string;
    biographie: string;
    imagePath: string;
    livres : LivreVM[];
}