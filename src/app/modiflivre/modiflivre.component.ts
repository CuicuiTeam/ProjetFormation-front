import { Component, OnInit } from '@angular/core';
import { LivreVM } from '../model/LivreVM';
import { BackEndService } from '../service/back-end.service';
import { MessagesService } from '../service/messages.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modiflivre',
  templateUrl: './modiflivre.component.html',
  styleUrls: ['./modiflivre.component.css']
})
export class ModiflivreComponent implements OnInit {
  livre: LivreVM;
  id: number;

  constructor(private backService: BackEndService,
    private messageService: MessagesService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = + this.route.snapshot.paramMap.get('id');
    this.ficheLivre();
  }

  ficheLivre() {
    this.backService.OneLivre(this.id).subscribe(
      data => {
        this.backService.handleData(data);
        if (data.payload) {
          //cache the logged member in datashare service
          this.livre = data.payload;
          console.log(this.livre);
        }
      },
      error => {
        console.error(error.message);
        //messageService.displayFailureMessage(error.message);
      }

    );

  }

  modifLivre(){
    this.backService.ModifLivre(this.livre).subscribe(
      data => {
        this.backService.handleData(data);
      },
      error => {
        console.log(error.message);
      }
    )
  }
}
