import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './components/login.component';

import { routes } from './routes';

import { SharedModule } from '@app/shared.module';

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    SharedModule,
  ],
  declarations: [ LoginComponent ]
})
export class LoginModule { }
