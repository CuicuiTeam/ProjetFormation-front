import { Component, OnInit } from '@angular/core';
import { BibliothequeVM } from '../model/BibliothequeVM';
import { BackEndService } from '../service/back-end.service';
import { MessagesService } from '../service/messages.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gestionbibliotheques',
  templateUrl: './gestionbibliotheques.component.html',
  styleUrls: ['./gestionbibliotheques.component.css']
})
export class GestionbibliothequesComponent implements OnInit {

  listeBibliotheques : BibliothequeVM[];

   constructor(
    private backService: BackEndService,
    private messageService: MessagesService,
    private router: Router) {}


  ngOnInit() {
    this.bibliotheques();
  }

  bibliotheques() {
     this.backService.Bibliotheque().subscribe(
      data => {
        this.backService.handleData(data);
        if (data.payload) {
          console.log(data.payload);
          //navigate to home and display navbar or the hidden tabs
          this.listeBibliotheques = data.payload;
          
        }
      },
      error => {
        console.error(error.message);
        //messageService.displayFailureMessage(error.message);
      }

    );
  }
}
