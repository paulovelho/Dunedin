import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '@app/shared.module';

// Components
import { MeComponent } from './components/me/me.component';
import { ContaAzulComponent } from './components/conta-azul/conta-azul.component';
import { UsersComponent } from './components/users.component';
import { UserFormComponent } from './components/form/user-form.component';
import { UsersListComponent } from './components/list/users-list.component';

// Services
import { UsersService } from './service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  declarations: [
    MeComponent,
    ContaAzulComponent,
    UsersComponent,
    UserFormComponent,
    UsersListComponent
  ],
  providers: [ // classes
    DatePipe,
    UsersService
  ],
  exports: [
  ]
})
export class UsersModule {
  constructor(
  ) {
  }
}
