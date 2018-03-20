import { Injectable } from '@angular/core';

@Injectable()
export class MessagesService {

  isDisplayed = true;
  alertClass = "";
  message = "";

  constructor() { }

  displayErrorMessage(message: string) {
    this.message = message;
    this.alertClass = "alert alert-danger";
  }

  displaySuccessfullMessage(message: string) {
    this.message = message;
    this.alertClass = "alert alert-success";
  }

  displayWarningMessage(message: string) {
    this.message = message;
    this.alertClass = "alert alert-warning";
  }

}