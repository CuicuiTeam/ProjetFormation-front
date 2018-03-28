import { Component, OnInit } from '@angular/core';
import { LivreVM } from '../model/LivreVM';
import { BackEndService } from '../service/back-end.service';
import { MessagesService } from '../service/messages.service';
import { DatashareService } from '../service/datashare.service';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import { MembreVM } from '../model/MembreVM';
import { BASE_URL } from '../app-constants';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-livre',
  templateUrl: './livre.component.html',
  styleUrls: ['./livre.component.css']
})
export class LivreComponent implements OnInit {
  private URL: string = BASE_URL;
  livre: LivreVM;
  id: number;
  user: MembreVM;

  constructor(private backService: BackEndService,
    private messageService: MessagesService,
    private dss: DatashareService,
    private router: Router,
    private route: ActivatedRoute,
    private storage: LocalStorageService) { }

  ngOnInit() {
    if (this.storage.retrieve('me')) {
      this.user = this.storage.retrieve('me');
    }
    this.id = + this.route.snapshot.paramMap.get('id');
    this.ficheLivre();
  }

  ficheLivre() {
    this.backService.OneLivre(this.id).subscribe(
      data => {
        this.backService.handleData(data);
        if (data.payload) {
          console.log(data.payload);
          //cache the logged member in datashare service
          this.livre = data.payload;

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
