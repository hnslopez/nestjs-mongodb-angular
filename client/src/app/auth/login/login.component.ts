import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthFacade } from 'src/app/auth/store/auth.facade';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { map } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  validateForm!: FormGroup;
  isLoading$ = this.authFacade.isLoadingLogin$;
  showLoginError$ = this.authFacade.hasLoginError$;
  passwordVisible = false;

  submitForm(): void {
    if (this.validateForm.valid) {
      const {password, userName} = this.validateForm.value;
      this.authFacade.login(userName, password)

    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  createNotification(title:string, description:string){
    this.notification.create(
      'error',
      title,
      description
      )
  }

  constructor(private fb: FormBuilder,private authFacade: AuthFacade,private notification: NzNotificationService) {
  //  this.showLoginError$.pipe().subscribe(console.log)
    /*
    this.showLoginError$.subscribe( data =>{
      console.log(data)
      if(data.error){ 
        if(data.code == 401){
          this.createNotification('Verifique datos ingresados', 'Usuario y/o contraseña son incorrectos');
        }

        if(data.code == 429){
          this.createNotification('Inténtalo de nuevo mas tarde', 'Demasiados intentos de inicio de sesión');
        }
      }
    });
    */

  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required,Validators.minLength(3),Validators.maxLength(16)]],
      password: [null, [Validators.required,Validators.minLength(3),Validators.maxLength(16)]],
    });
  }
}
