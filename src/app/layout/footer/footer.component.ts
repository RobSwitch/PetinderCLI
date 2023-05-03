import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  private _year: number;
  constructor() {
    this._year = new Date().getFullYear();
  }
  get year() {
    return this._year;
  }
}
