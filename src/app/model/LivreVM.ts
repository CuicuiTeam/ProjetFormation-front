export interface LivreVM{
    titre: string;
    description: string;
    prix: number;
    datePublication: string;
    imagePath: string;
    popular: Boolean;
    periodic: Boolean;
    editeurId: number;
    categorieId: number;
    auteursId: number;
}