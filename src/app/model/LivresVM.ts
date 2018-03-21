export interface LivresVM{
    titre: string;
    description: string;
    prix: number;
    datePublication: string;
    imagePath: string;
    isPopular: Boolean;
    isPeriodic: Boolean;
    editeurId: number;
    categorieId: number;
    auteursId: number;
}