import { Component, OnInit } from '@angular/core';
import { LivreVM } from '../model/LivreVM';
import { BackEndService } from '../service/back-end.service';
import { MessagesService } from '../service/messages.service';
import { DatashareService } from '../service/datashare.service';
import { LocalStorageService } from 'ngx-webstorage';
import { MembreVM } from '../model/MembreVM';
import { BASE_URL } from '../app-constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-periodiques',
  templateUrl: './periodiques.component.html',
  styleUrls: ['./periodiques.component.css']
})
export class PeriodiquesComponent implements OnInit {
  URL: string = BASE_URL;
  id: number;
  listeLivres: LivreVM[];
  user: MembreVM;

  constructor(private backService: BackEndService,
    private messageService: MessagesService,
    private dss: DatashareService,
    private router: Router,
    private storage: LocalStorageService) { this.periodiques(); }

  ngOnInit() {
    if (this.storage.retrieve('me')) {
      this.user = this.storage.retrieve('me');
    }
  }

  periodiques() {
    this.backService.LivresPeriodiques(this.listeLivres).subscribe(
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
