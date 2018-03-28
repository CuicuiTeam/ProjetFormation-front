import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AuteursComponent } from './auteurs/auteurs.component';
import { AuteurComponent } from './auteur/auteur.component';
import { AjoutlivreComponent } from './ajoutlivre/ajoutlivre.component';
import { LivresComponent } from './livres/livres.component';
import { AjoutbibliothequeComponent } from './ajoutbibliotheque/ajoutbibliotheque.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { ModiflivreComponent } from './modiflivre/modiflivre.component';
import { ModifmembreComponent } from './modifmembre/modifmembre.component';
import { GestionmembresComponent } from './gestionmembres/gestionmembres.component';
import { GestionlivresComponent } from './gestionlivres/gestionlivres.component';
import { BibliothequesComponent } from './bibliotheques/bibliotheques.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { LivreComponent } from './livre/livre.component';
import { CategorieComponent } from './categorie/categorie.component';
import { CategoriesComponent } from './categories/categories.component';
import { PeriodiquesComponent } from './periodiques/periodiques.component';
import { PanierComponent } from './panier/panier.component';
import { GestionempruntsComponent } from './gestionemprunts/gestionemprunts.component';
import { RechercheComponent } from './recherche/recherche.component';

const routes: Routes = [
    { path: 'accueil', component: LivresComponent },
    { path: 'periodiques', component: PeriodiquesComponent },
    { path: 'panier', component: PanierComponent },
    { path: 'livre/:id', component: LivreComponent },
    { path: 'categorie/:id', component: CategorieComponent },
    { path: 'connexion', component: ConnexionComponent },
    { path: 'auteurs', component: AuteursComponent },
    { path: 'categories', component: CategoriesComponent },
    { path: 'auteur/:id', component: AuteurComponent },
    { path: 'bibliotheques', component: BibliothequesComponent },
    { path: 'panier', component: PanierComponent },
    { path: 'membre', component: GestionmembresComponent },    { path: 'admin/livres', component: GestionlivresComponent },    { path: 'admin/ajoutlivre', component: AjoutlivreComponent },
    { path: 'admin/modiflivre/:id', component: ModiflivreComponent },
    { path: 'admin/membres', component: GestionmembresComponent },
    { path: 'admin/inscription', component: InscriptionComponent },
    { path: 'admin/modifmembre', component: ModifmembreComponent },
    { path: 'admin/emprunts', component: GestionempruntsComponent },
    { path: 'admin/ajoutbibliotheque', component: AjoutbibliothequeComponent },
    { path: 'recherche/:recherche', component: RechercheComponent },
    { path: '', component: LivresComponent },
    { path: '**', component: PagenotfoundComponent }


];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
