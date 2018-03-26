import { Component, OnInit } from '@angular/core';
import { LivreVM } from '../model/LivreVM';
import { BackEndService } from '../service/back-end.service';
import { MessagesService } from '../service/messages.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gestionlivres',
  templateUrl: './gestionlivres.component.html',
  styleUrls: ['./gestionlivres.component.css']
})
export class GestionlivresComponent implements OnInit {

  listeLivres: LivreVM[];


  constructor(
    private backService: BackEndService,
    private messageService: MessagesService,
    private router: Router) { this.livres(); }


  ngOnInit() {
  }

  livres() {
    this.backService.Livres().subscribe(
      data => {
        this.backService.handleData(data);
        if (data.payload) {
          console.log(data.payload);
          //cache the logged member in datashare service
          this.listeLivres = data.payload;

        }
      },
      error => {
        console.error(error.message);
        //messageService.displayFailureMessage(error.message);
      }

    );

  }

}
