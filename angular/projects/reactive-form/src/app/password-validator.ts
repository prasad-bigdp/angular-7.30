import {  FormGroup, ValidatorFn } from "@angular/forms";
export function passwordValidators(){
   
    return (control: FormGroup): { [ key: string ]: boolean } |boolean => {
        const password = control.get('password');
        const confirm_Password = control.get('confirmPassword')
        if (!password || !confirm_Password || password.value === confirm_Password.value) {
            return true;
        }
        return { passwordMatch: false }
    };
}
 