import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auteurs',
  templateUrl: './auteurs.component.html',
  styleUrls: ['./auteurs.component.css']
})
export class AuteursComponent implements OnInit {

  titre = "Liste des auteurs";

  constructor() { }

  ngOnInit() {
  }

}
