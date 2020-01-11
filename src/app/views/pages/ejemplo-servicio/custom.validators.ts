import {AbstractControl} from '@angular/forms';

export function ageRangeValidator(control: AbstractControl): any | null {

  if (control.value !== undefined && (isNaN(control.value) || control.value > 18)) {
    return {'ageRange': true, message: 'edad no valida se sale de los rangos'};
  }
  return null;
}
