import { Component, OnInit } from '@angular/core';
import { MembreVM} from '../model/MembreVM';
import { BackEndService } from '../service/back-end.service';
import { MessagesService } from '../service/messages.service';
import { DatashareService } from '../service/datashare.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gestionmembres',
  templateUrl: './gestionmembres.component.html',
  styleUrls: ['./gestionmembres.component.css']
})
export class GestionmembresComponent implements OnInit {

  membres: MembreVM[];

  constructor( private backService: BackEndService,
    private messageService: MessagesService,
    private dss: DatashareService,
    private router: Router) {this.listerMembre();}

  ngOnInit() {
  }

  listerMembre() {
    console.log("appel fonction livre");
    this.backService.ListerMembre(this.membres).subscribe(
      data => {
        this.backService.handleData(data);
        if (data.payload) {
          //cache the logged member in datashare service
          this.membres = data.payload;
          
        }
      },
      error => {
        console.error(error.message);
        //messageService.displayFailureMessage(error.message);
      }

    );

  }

}
