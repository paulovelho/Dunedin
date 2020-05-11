import { Injectable, Output, EventEmitter } from "@angular/core";

import { User } from '@app/features/users/model';

@Injectable()
export class Store {

  @Output() newLogin = new EventEmitter<User>();

  constructor(
  ) {
    this.init();
  }

  private init(): void {
    this.loadUserFromStorage();
  }

  public setClient(client: string): void {
    localStorage.setItem("client", client);
  }
  public getClient(): string {
    return localStorage.getItem("client") || null;
  }

  public setToken(token: string): void {
    localStorage.setItem("token", token);
  }
  public getToken(): string {
    return localStorage.getItem("token") || null;
  }

  /* USER STORE */
  private user: User = null;
  private loadUserFromStorage(): void {
    let localUser = localStorage.getItem("user");
    if(!localUser || localUser == "undefined") return null;
    let data = JSON.parse(localUser);
    if(!data) return null;
    this.user = new User().from(data);
  }
  private saveUserInStorage(user: User): void {
    localStorage.setItem("user", JSON.stringify(user));
    this.newLogin.emit(user);
  }
  public setLoggedUser(user: User): void {
    this.user = user;
    this.saveUserInStorage(user);
  }
  public getLoggedUser(): User {
    return this.user;
  }
  public isLogged(): boolean {
    let user = this.getLoggedUser();
    let token = this.getToken();
    if(!user || !token) return false;
    return(user.email != null);
  }

  public clean(): void {
    this.user = null;
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  }


}
