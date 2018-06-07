import { Component, Input } from '@angular/core';

/**
 * Generated class for the CityindexComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'cityindex',
  templateUrl: 'cityindex.html'
})
export class CityindexComponent {
  @Input()
  input
  text: string;

  constructor() {
    console.log('Hello CityindexComponent Component');
    this.text = 'Hello World';
  }

}
