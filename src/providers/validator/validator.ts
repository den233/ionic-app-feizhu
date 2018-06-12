import {FormControl, FormGroup} from "@angular/forms";
 
import {observable} from "rxjs/symbol/observable";
export function mobileValidator(control: FormControl):  any {
  var myreg =  /^1[3|4|5|7|8][0-9]{9}$/;
  let valid = myreg.test(control.value);
  console.log("mobile的校验结果是" + valid);
  return valid ? null : {mobile : true};
}
export function mobileAsyncValidator(control: FormControl):  any {
  var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})) + \d{8})$/;
  let valid = myreg.test(control.value);
  console.log("mobile的校验结果是" + valid);
  return observable.of(valid ? null : {mobile : true}).delay(5000);
}
export function equalValidator(group: FormGroup): any {
  let password: FormControl = group.get('password') as FormControl;
  let pconfirm: FormControl = group.get('pconfirm') as FormControl;
  let valid:boolean = (password.value === pconfirm.value);
  // console.log('密码校验结果是' + valid);
  return valid  ? null : {equal: {descs: "两次密码不一致"} };
}
