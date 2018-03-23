import { Component, OnInit } from '@angular/core';
import { LivreVM } from '../model/LivreVM';
import { BackEndService } from '../service/back-end.service';
import { MessagesService } from '../service/messages.service';
import { DatashareService } from '../service/datashare.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-periodiques',
  templateUrl: './periodiques.component.html',
  styleUrls: ['./periodiques.component.css']
})
export class PeriodiquesComponent implements OnInit {
id:number;
  listeLivres: LivreVM[];

  constructor(private backService: BackEndService,
    private messageService: MessagesService,
    private dss: DatashareService,
    private router: Router) { this.periodiques();}

  ngOnInit() {
  }

   periodiques(){
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

}
