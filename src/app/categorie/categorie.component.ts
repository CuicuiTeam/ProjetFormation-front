import { Component, OnInit } from '@angular/core';
import { CategorieVM } from '../model/CategorieVM';
import { LivreVM } from '../model/LivreVM';
import { MembreVM } from '../model/MembreVM';
import { BackEndService } from '../service/back-end.service';
import { MessagesService } from '../service/messages.service';
import { DatashareService } from '../service/datashare.service';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import { BASE_URL } from '../app-constants';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {
  URL : string = BASE_URL;
  listeLivres: LivreVM[];
  id: number;
  user : MembreVM;


  constructor(private backService: BackEndService,
    private messageService: MessagesService,
    private dss: DatashareService,
    private router: Router,
    private route: ActivatedRoute,
    private storage: LocalStorageService) {
    this.route.params.subscribe((params: Params) => {
      console.log(params);
      this.id = + this.route.snapshot.paramMap.get('id');
      this.listeLivres = null;
      this.listeBycategorie();
    });
  }

  ngOnInit() {
    if (this.storage.retrieve('me')){
      this.user = this.storage.retrieve('me');
    }
  }

  listeBycategorie() {
    this.backService.LivresCategorie(this.id).subscribe(
      data => {
        this.backService.handleData(data);
        console.log(data.payload);
        if (data.payload) {
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
