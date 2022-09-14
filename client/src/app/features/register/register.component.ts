import { Component, Injectable, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Observable, Observer } from 'rxjs';
import { RegisterService } from 'src/app/core/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

@Injectable({
  providedIn: 'root'
})
export class RegisterComponent implements OnInit {
  current = 0;
  validateForm!: FormGroup;

  private isStepValid = (index: number): boolean => {
    return this.getGroupAt(index).valid || this.currentGroup.untouched;
  };

  private shouldValidate = (index: number): boolean => {
    return this.getGroupAt(index).touched && this.current >= index;
  };

  public get currentGroup(): FormGroup {
    return this.getGroupAt(this.current);
  }

  public steps = [
    {
      label: "Account Form",
      isValid: this.isStepValid,
      validate: this.shouldValidate,
    },
    {
      label: "Personal Form",
      isValid: this.isStepValid,
      validate: this.shouldValidate,
    },
    {
      label: "Institute Form",
      isValid: this.isStepValid,
      validate: this.shouldValidate,
    },
  ];


  next(): void {

    if(this.currentGroup.invalid){
      
      Object.values(this.currentGroup.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }else{
      this.current += 1;
      return;
    }
    //this.currentGroup.markAllAsTouched();
  }

  pre(): void {
    this.current -= 1;
  }


  done(): void {
    if(this.currentGroup.invalid){
      Object.values(this.currentGroup.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }else{
      this.currentGroup.value['phone'] = this.currentGroup.value['phoneNumberPrefix'] + ' ' + this.currentGroup.value['phone'] 

      this.registerService.register(this.currentGroup.value).subscribe(async (data) => {
        console.log(data)
        setTimeout(async()=>{
          await this.createNotification('Error',data);
        },1000);

      })
    }
  }


  createNotification(title:string, description:string){
    this.notification.create(
      'error',
      title,
      description
      )
  }


  submitForm(): void {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  


  /* reparar*/
  updateConfirmValidator(): void {
    /** wait for refresh value */
    Promise.resolve().then(() => this.currentGroup.controls['checkPassword'].updateValueAndValidity());
  }

  
  
  
  confirmValidator = (control:FormControl) => 
  new Observable((observer: Observer<ValidationErrors | null>) =>{
    if (!control.value) {
      observer.next({ error: true, require:true });
    }else if (control.value !== this.currentGroup.controls['password'].value){
      observer.next({ confirm: true, error: true });
    }else{
      observer.next(null);
    }
    observer.complete();

  })

  userNameAsyncValidator = (control: FormControl) =>
  new Observable((observer: Observer<ValidationErrors | null>) => {
      this.registerService.filter(control.value).subscribe(data => {
        if(!data){
          observer.next({ error: true, duplicated: true });
        }else{
          observer.next(null);
        }
        observer.complete();

      })
  });

  public getcurrentGroup(): FormGroup {
    return this.getGroupAt(this.current);
  }
  
  private getGroupAt(index: number): FormGroup {
    const groups = Object.keys(this.validateForm.controls).map((groupName) =>
      this.validateForm.get(groupName)
    ) as FormGroup[];

    return groups[index];
  }
 

  constructor(private fb: FormBuilder, private registerService: RegisterService, private notification: NzNotificationService) {}

  ngOnInit(): void { 
    this.validateForm = this.fb.group({
      userForm: this.fb.group({
        username: ['', [Validators.required],
      /*  [this.userNameAsyncValidator],[Validators.minLength(3)],[Validators.maxLength(16)]*/
      ],
        password: ["", [Validators.required]],
        checkPassword: ["", [Validators.required], [this.confirmValidator]],
        email: ['', [Validators.email, Validators.required]],
      
        //profile

        name: [null, [Validators.required]],
        lastName: [null, [Validators.required]],
        phone: [null, [Validators.required]],
        phoneNumberPrefix: ['+56'],
        rut:[null, [Validators.required]],
        themesInterest:new FormControl(null, { validators: Validators.required}),
        semesterProgress:['',Validators.required],
      
        career:['',Validators.required],

      }),

      /*
      username: [null, [Validators.required]],
      email: [null, [Validators.email, Validators.required]],
     
      password: [null, [Validators.required]],
      checkPassword: [null, [Validators.required, this.confirmationValidator]],


      phoneNumberPrefix: ['+56'],
      phoneNumber: [null, [Validators.required]],

      themesInterest: [null, [Validators.required]],
      semesterProgress: [null, [Validators.required]],
      career:{ type:String, required:true},

      captcha: [null, [Validators.required]],
      agree: [false]
      */
    });
  }
}
