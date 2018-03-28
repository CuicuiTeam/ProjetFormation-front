import { Component, OnInit } from '@angular/core';
import { MembreVM } from '../model/MembreVM';
import { BackEndService } from '../service/back-end.service';
import { MessagesService } from '../service/messages.service';
import { BASE_URL } from '../app-constants';
import { Router } from '@angular/router';
import {LocalStorageService, LocalStorage} from 'ngx-webstorage';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user : MembreVM;
  private URL:string = BASE_URL;

  constructor(
    private backService: BackEndService,
    private messageService: MessagesService,
    private router: Router,
    private storage: LocalStorageService) { }

  ngOnInit() {
    if (this.storage.retrieve('me')){
      this.user = this.storage.retrieve('me');
    }
  }

  logout(){
    this.backService.Logout().subscribe(
      data => {
        this.backService.handleData(data);
        this.storage.clear('me');
        this.user = null;
        this.router.navigate(['/accueil']);
      },
     error => {
       console.error(error.message);
       //messageService.displayFailureMessage(error.message);
     }
   );
  }

  search(recherche : string){
    this.router.navigate(['/recherche/'+ recherche]);
  }

}
