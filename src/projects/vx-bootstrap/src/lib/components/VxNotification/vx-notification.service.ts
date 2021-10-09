import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VxNotificationService {

  constructor() { }

  show() {
    console.log("show!");
  }
}
