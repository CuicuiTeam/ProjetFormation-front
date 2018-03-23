import { Injectable } from '@angular/core';
import { MembreVM } from '../model/MembreVM';

@Injectable()
export class DatashareService {

  loggedMember: MembreVM;
  constructor() { }


}