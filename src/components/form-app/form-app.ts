import {Component} from "@angular/core";
import {FormGroup, FormBuilder, AbstractControl, Validators} from "@angular/forms";
import {mobileValidator, equalValidator, mobileAsyncValidator} from "../../providers/validator/validator";
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
  valid(c: AbstractControl): {[key: string]: any} {
    return {"a": "b"};
  }
  formModel: FormGroup;
  constructor(fb: FormBuilder) {
    this.formModel = fb.group({
      username: ['', [Validators.required, Validators.minLength(5)]],
      mobile: ['', mobileValidator, mobileAsyncValidator],
      passwordsGroup: fb.group({
        password: ['', Validators.minLength(6)],
        pconfirm: ['']
      }, {validator: equalValidator})
    })
  }

}
