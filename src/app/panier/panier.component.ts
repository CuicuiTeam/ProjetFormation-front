import { Component, OnInit } from '@angular/core';
import { BackEndService } from '../service/back-end.service';
import { MessagesService } from '../service/messages.service';
import { DatashareService } from '../service/datashare.service';
import { Router } from '@angular/router';
import { PanierVM } from '../model/PanierVM';
import {LocalStorageService, LocalStorage} from 'ngx-webstorage';
import { MembreVM } from '../model/MembreVM';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  // panier: PanierVM = {
  //   dateCreation:"",
  //   dateLivraison:"",
  //   membreId: null

  // };
  contenu: any;
  user : MembreVM;
  constructor(
     private backService: BackEndService,
    private messageService: MessagesService,
    private dss: DatashareService,
    private storage: LocalStorageService,
    private router: Router) {this.panier();}
  

  ngOnInit() {
    if (this.storage.retrieve('me')){
      this.user = this.storage.retrieve('me');
    }
  }

  panier(){
    console.log("appel fonction panier");
    this.backService.AfficherPanier().subscribe(
      data => {
        this.backService.handleData(data);
        if (data.payload) {
          console.log("payload => " + JSON.stringify(data.payload));
          //cache the logged member in datashare service
          this.contenu = data.payload;

  }
      }
    );
  }
}
