import { Component, OnInit } from '@angular/core';
import { LivreVM } from '../model/LivreVM';
import { BackEndService } from '../service/back-end.service';
import { MessagesService } from '../service/messages.service';
import { DatashareService } from '../service/datashare.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajoutlivre',
  templateUrl: './ajoutlivre.component.html',
  styleUrls: ['./ajoutlivre.component.css']
})
export class AjoutlivreComponent implements OnInit {

  livre: LivreVM = {
    titre: "",
    description: "",
    prix: 0,
    datePublication: "",
    imagePath: "",
    popular: false,
    periodic: false,
    editeur: null,
    categorie: null,
    auteurs: null,
    id: null
  };

  constructor(
    private backService: BackEndService,
    private messageService: MessagesService,
    private dss: DatashareService,
    private router: Router) { }

  ngOnInit() {
  }

  ajoutLivre(){
    this.backService.AjoutLivre(this.livre).subscribe(
      data => {
        this.backService.handleData(data);
        console.log(data.payload);
        if(data.payload) {
          console.log(data.payload);
          this.router.navigate(['/accueil']);
        }
      },
      error => {
        console.error(error.message);
      }
    );
  }

}
