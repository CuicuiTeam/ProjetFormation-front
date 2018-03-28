import { Component, OnInit } from '@angular/core';
import { BackEndService } from '../service/back-end.service';
import { LivreVM } from '../model/LivreVM';
import { LocalStorageService } from 'ngx-webstorage';
import { MembreVM } from '../model/MembreVM';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css']
})
export class RechercheComponent implements OnInit {
    listeLivres : LivreVM[];
    user : MembreVM;

  constructor(private backService: BackEndService,
    private router: Router, private route : ActivatedRoute,
    private storage: LocalStorageService
    ) {
      this.route.params.subscribe( params => this.search(params["recherche"]));
    }

  ngOnInit() {
    if (this.storage.retrieve('me')) {
      this.user = this.storage.retrieve('me');
    }
  }

search(recherche : string) {
    this.backService.Recherche(recherche).subscribe(
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

  ajoutpanier(id) {
    console.log("appel fonction ajoutpanier");

     this.backService.AjoutPanier(id).subscribe(
      data => {
        this.backService.handleData(data);
        if (data.payload) {
          console.log(data.payload);
          //cache the logged member in datashare service
        }
      },
      error => {
        console.error(error.message);
        //messageService.displayFailureMessage(error.message);
      }

    );

  }
}
