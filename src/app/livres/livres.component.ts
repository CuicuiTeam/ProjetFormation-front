import { Component, OnInit } from '@angular/core';
import { LivresVM } from '../model/LivresVM';
import { BackEndService } from '../service/back-end.service';
import { MessagesService } from '../service/messages.service';
import { DatashareService } from '../service/datashare.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-livres',
  templateUrl: './livres.component.html',
  styleUrls: ['./livres.component.css']
})
export class LivresComponent implements OnInit {

  // livres: LivresVM = {
  //   titre:"",
  //   description:"",
  //   prix:null,
  //   datePublication:"",
  //   imagePath:"",
  //   isPopular:false,
  //   isPeriodic:false,
  //   editeurId:null,
  //   categorieId:null,
  //   auteursId:null
  // };
  listeLivres: LivresVM[];

  constructor(
     private backService: BackEndService,
    private messageService: MessagesService,
    private dss: DatashareService,
    private router: Router) {this.livre(); }


  ngOnInit() {
  }

  livre() {
    this.backService.Livres(this.listeLivres).subscribe(
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
