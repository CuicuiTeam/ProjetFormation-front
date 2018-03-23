import { Component, OnInit } from '@angular/core';
import { DatashareService } from '../service/datashare.service';
import { MembreVM } from '../model/MembreVM';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user : MembreVM;
  class = "alert-danger";
  message = "Attention Michel";

  constructor(private dss: DatashareService) { }

  ngOnInit() {
    if (this.dss.loggedMember){
      this.user = this.dss.loggedMember;
    }
  }

}
