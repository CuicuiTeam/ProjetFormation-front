import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
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
import { GestionlivresComponent } from './gestionlivres/gestionlivres.component';
// import { GestionmembresComponent } from './gestionmembres/gestionmembres.component';
import { BackEndService } from './service/back-end.service';
import { CustomInterceptor } from './service/CustomInterceptor.service';
import { MessagesService } from './service/messages.service';
import { DatashareService } from './service/datashare.service';
import { PanierComponent } from './panier/panier.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { PeriodiquesComponent } from './periodiques/periodiques.component';
import { CategorieComponent } from './categorie/categorie.component';
import {LocalStorageService} from 'ngx-webstorage';
import { GestionempruntsComponent } from './gestionemprunts/gestionemprunts.component';
import { RechercheComponent } from './recherche/recherche.component';


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
     MessagesComponent,
     PanierComponent,
     GestionempruntsComponent,
     PeriodiquesComponent,
     CategorieComponent,
     RechercheComponent,
    GestionlivresComponent//,
    // GestionmembresComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [BackEndService, MessagesService, DatashareService, LocalStorageService, {
      provide: HTTP_INTERCEPTORS,
      useClass: CustomInterceptor ,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
