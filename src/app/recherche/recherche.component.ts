import { Component, OnInit } from '@angular/core';
import { BackEndService } from '../service/back-end.service';
import { LivreVM } from '../model/LivreVM';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css']
})
export class RechercheComponent implements OnInit {
    listeLivres : LivreVM[];

  constructor(private backService: BackEndService,
    private router: Router, private route : ActivatedRoute
    ) {
      this.route.params.subscribe( params => this.search(params["recherche"]));
    }

  ngOnInit() {
  }

search(recherche : string) {
    this.backService.Recherche(recherche).subscribe(
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
