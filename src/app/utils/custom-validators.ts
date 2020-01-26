import {ValidateFn} from 'codelyzer/walkerFactory/walkerFn';
import {AbstractControl, FormGroup, ValidationErrors} from '@angular/forms';

export class CustomValidators {

    static samePassword(control: FormGroup): ValidationErrors | null {
        let password: string = control.get('password').value;
        let cpassword: string = control.get('cpassword').value;

        try {
            if (
                password && cpassword
            ) {
                if (password.length > 0 && cpassword.length > 0 && password !== cpassword) {
                    return {samePassword: false};
                }
            }
            return null;
        } catch (e) {
            console.log(e);
            return null;
        }
    };
}
