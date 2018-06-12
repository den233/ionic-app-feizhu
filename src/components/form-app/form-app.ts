import { Component } from '@angular/core';

/**
 * Generated class for the FormComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'form-app',
  templateUrl: 'form-app.html'
})
export class FormComponent {

  text: string;

  constructor() {
    console.log('Hello FormComponent Component');
    this.text = 'Hello World';
  }

}
