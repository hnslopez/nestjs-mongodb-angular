import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { RouterModule, Routes } from '@angular/router';
import { NoAuthGuard } from 'src/app/auth/guards';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { UserFormComponent } from './user-form/user-form.component';
import { ProfileFormComponent } from './profile-form/profile-form.component';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzDividerModule } from 'ng-zorro-antd/divider';

const routes: Routes = [
  { path: '', 
  component: RegisterComponent,
  canActivate: [NoAuthGuard],
  data:{title:'Registro'}

}];

@NgModule({
  declarations: [RegisterComponent, UserFormComponent, ProfileFormComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NzButtonModule,
    NzCardModule,
    NzNotificationModule,
    NzIconModule,
    NzFormModule,
    NzInputModule,
    FormsModule,
    ReactiveFormsModule,
    NzSelectModule,
    NzCheckboxModule,
    NzStepsModule,
    NzToolTipModule,
    NzDividerModule
  ]
})
export class RegisterModule { }
