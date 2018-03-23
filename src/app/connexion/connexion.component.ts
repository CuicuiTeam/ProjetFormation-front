import { Component, OnInit } from '@angular/core';
import { IdentifiantsVM } from '../model/IdentifiantsVM';
import { BackEndService } from '../service/back-end.service';
import { MessagesService } from '../service/messages.service';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';


@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  identifiants: IdentifiantsVM = {
    email: "",
    password: ""
  };


  constructor(
    private backService: BackEndService,
    private messageService: MessagesService,
    private router: Router,
    private storage: LocalStorageService) { }

  ngOnInit() {
  }

  login() {
    this.backService.Login(this.identifiants).subscribe(
      data => {
        this.backService.handleData(data);
        if (data.payload) {
          console.log(data.payload);
          //cache the logged member in local storage
          this.storage.store('me', data.payload);
          //navigate to home and display navbar or the hidden tabs
          this.router.navigate(['/accueil']);
          
        }
      },
      error => {
        console.error(error.message);
        //messageService.displayFailureMessage(error.message);
      }

    );

  }




}
