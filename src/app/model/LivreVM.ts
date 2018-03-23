import { AuteurVM } from '../model/AuteurVM';
import { EditeurVM } from '../model/EditeurVM';
import { CategorieVM } from '../model/CategorieVM';

export interface LivreVM{
    titre: string;
    description: string;
    prix: number;
    datePublication: string;
    imagePath: string;
    popular: Boolean;
    periodic: Boolean;
    editeur: EditeurVM;
    categorie: CategorieVM;
    auteurs: AuteurVM[];
    id:number;
}