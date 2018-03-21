import { Component, OnInit } from '@angular/core';
import { BackEndService } from '../service/back-end.service';
import { MessagesService } from '../service/messages.service';
import { DatashareService } from '../service/datashare.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajoutlivre',
  templateUrl: './ajoutlivre.component.html',
  styleUrls: ['./ajoutlivre.component.css']
})
export class AjoutlivreComponent implements OnInit {

  constructor(
    private backService: BackEndService,
    private messageService: MessagesService,
    private dss: DatashareService,
    private router: Router) { }

  ngOnInit() {
  }

  ajoutLivre(){
    
  }

}
