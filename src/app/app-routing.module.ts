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
//import { GestionmembresComponent } from './gestionmembres/gestionmembres.component';
//import { GestionlivresComponent } from './gestionlivres/gestionlivres.component';
import { BibliothequesComponent } from './bibliotheques/bibliotheques.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { LivreComponent } from './livre/livre.component';

const routes: Routes = [
    { path: 'accueil', component: LivresComponent },
    { path: 'livre', component: LivreComponent },
    { path: 'connexion', component: ConnexionComponent },
    { path: 'auteurs', component: AuteursComponent },
    { path: 'auteur', component: AuteurComponent },
    { path: 'bibliotheques', component: BibliothequesComponent },
    //{ path: 'admin/livres', component: GestionlivresComponent },
    { path: 'admin/ajoutlivre', component: AjoutlivreComponent },
    { path: 'admin/modiflivre', component: ModiflivreComponent },
    //{ path: 'admin/membres', component: GestionmembresComponent },
    { path: 'admin/inscription', component: InscriptionComponent },
    { path: 'admin/modifmembre', component: ModifmembreComponent },
    { path: 'admin/ajoutbibliotheque', component: AjoutbibliothequeComponent },
    { path: '**', component: PagenotfoundComponent }


];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
