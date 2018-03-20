import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HeaderService } from './header.service';
import { AuteursComponent } from './auteurs/auteurs.component';
import { AuteurComponent } from './auteur/auteur.component';
import { AjoutlivreComponent } from './ajoutlivre/ajoutlivre.component';
import { LivresComponent } from './livres/livres.component';
import { AjoutbibliothequeComponent } from './ajoutbibliotheque/ajoutbibliotheque.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { ModiflivreComponent } from './modiflivre/modiflivre.component';
import { ModifmembreComponent } from './modifmembre/modifmembre.component';
import { BibliothequesComponent } from './bibliotheques/bibliotheques.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { LivreComponent } from './livre/livre.component';
import { MessagesComponent } from './messages/messages.component';
// import { GestionlivresComponent } from './gestionlivres/gestionlivres.component';
// import { GestionmembresComponent } from './gestionmembres/gestionmembres.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PagenotfoundComponent,
    AuteursComponent,
    AuteurComponent,
    AjoutlivreComponent,
    LivresComponent,
    AjoutbibliothequeComponent,
    ConnexionComponent,
    ModiflivreComponent,
    ModifmembreComponent,
    BibliothequesComponent,
    InscriptionComponent,
     LivreComponent,
     MessagesComponent//,
    // GestionlivresComponent,
    // GestionmembresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [HeaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
