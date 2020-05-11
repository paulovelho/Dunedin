import { Validators} from '@angular/forms';
import { BaseModel } from "@app/services/base-model/base-model";

export class User extends BaseModel {

  public id: string;
  public name: string;
  public email: string;
  public role: UserRoles;
  public active: boolean;
  public last_login: Date;

  protected validations = {
  	email: ["required"]
  };

  constructor () {
  	super();
  }

  public getFormData() {
    return {
      name: this.name,
      email: this.email,
      role: this.role
    };
  }

  public getData() {
    return {
      name: this.name,
      email: this.email,
      role: this.role,
      active: this.active
    }
  }

  getRole(): string {
    return this.getRoleName(this.role);
  }

  public getRoleName(role: UserRoles): string {
    let roles = {
      ADMIN: "Administrador",
      SALES: "Vendedor"
    };
    return roles[role];
  }

}

export const enum UserRoles {
  ADMIN, SALES
};
