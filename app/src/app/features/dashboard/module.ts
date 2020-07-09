import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from './routes';

import { DashboardComponent } from './components/dashboard.component';
import { SharedModule } from '@app/shared.module';

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    SharedModule,
  ],
  declarations: [ DashboardComponent ]
})
export class DashboardModule { }
