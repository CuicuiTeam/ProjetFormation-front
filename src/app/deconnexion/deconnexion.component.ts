import { Component, OnInit } from '@angular/core';
import { BackEndService } from '../service/back-end.service';
import { MessagesService } from '../service/messages.service';
import { DatashareService } from '../service/datashare.service';
import { Router } from '@angular/router';
import {LocalStorageService, LocalStorage} from 'ngx-webstorage';
@Component({
  selector: 'app-deconnexion',
  templateUrl: './deconnexion.component.html',
  styleUrls: ['./deconnexion.component.css']
})
export class DeconnexionComponent implements OnInit {

  @LocalStorage('me')
  boundAttribute;

  constructor(
    private backService: BackEndService,
    private messageService: MessagesService,
    private router: Router,
    private storage: LocalStorageService
  ) { }

  ngOnInit() {
  }

  logout(){
    this.backService.Logout().subscribe(
      data => {
        this.backService.handleData(data);
        console.log(this.boundAttribute);
        this.storage.clear(this.storage.retrieve('me'));
        this.router.navigate(['/accueil']);
      },
     error => {
       console.error(error.message);
       //messageService.displayFailureMessage(error.message);
     }
   );
  }

}
