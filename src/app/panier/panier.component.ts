import { Component, OnInit } from '@angular/core';
import { BackEndService } from '../service/back-end.service';
import { MessagesService } from '../service/messages.service';
import { DatashareService } from '../service/datashare.service';
import { Router } from '@angular/router';
import { PanierVM } from '../model/PanierVM';

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
  constructor(
     private backService: BackEndService,
    private messageService: MessagesService,
    private dss: DatashareService,
    private router: Router) {this.panier();}
  

  ngOnInit() {
  }

  panier(){

    this.backService.AfficherPanier().subscribe(
      data => {
        this.backService.handleData(data);
        if (data.payload) {
          console.log(data.payload);
          //cache the logged member in datashare service
          this.contenu = data.payload;

  }
      }
    );
  }
}
