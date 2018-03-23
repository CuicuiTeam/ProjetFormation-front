import { Component, OnInit } from '@angular/core';
import { MembreVM } from '../model/MembreVM';
import { BackEndService } from '../service/back-end.service';
import { MessagesService } from '../service/messages.service';
import { DatashareService } from '../service/datashare.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
membre: MembreVM = {
  id : null,
 email : "",
    password : "",
    nom : "",
    prenom : "",
    adresse : "",
    ville : "",
    codePostal : "",
    telephone : "",
    admin : false
};

  constructor(
    private backService: BackEndService,
    private messageService: MessagesService,
    private dss: DatashareService,
    private router: Router) { }

  ngOnInit() {
  }

  newMembre() {
     this.backService.newMembre(this.membre).subscribe(
      data => {
        this.backService.handleData(data);
        if (data.payload) {
          console.log(data.payload);
          //navigate to home and display navbar or the hidden tabs
          this.router.navigate(['/accueil']);
          
        }
      },
      error => {
        console.error(error.message);
        //messageService.displayFailureMessage(error.message);
      }

    );
  }

}
