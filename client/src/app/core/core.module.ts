import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { EffectsModule } from '@ngrx/effects';
import { environment } from 'src/environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { authInterceptorProviders } from './interceptors';
import { AuthModule } from '../auth/auth.module';
import { ApiService } from './services/api.service';
import { RegisterService } from './services/register.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,

    StoreModule.forRoot({}, {}),
    StoreRouterConnectingModule.forRoot(),
    EffectsModule.forRoot([]),
    environment.production
      ? []
      : StoreDevtoolsModule.instrument({ name: 'Angular Authentication' }),

    // Application
    AuthModule,
    
  ],
  providers:[
    ...authInterceptorProviders,
    ApiService,
    RegisterService
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import only once in AppModule');
    }
  }
} 