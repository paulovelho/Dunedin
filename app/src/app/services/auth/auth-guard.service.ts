import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Toaster } from '@services/toaster/toaster.service';
import { AuthService } from './authentication.service';
import { NavigationService }  from '@services/navigation/navigation.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(
  	public auth: AuthService,
  	private navigation: NavigationService,
  	public toaster: Toaster,
  ) {}

  canActivate(): boolean {
    if (!this.auth.isAuthenticated()) {
    	this.toaster.error("Erro na permissão de acesso. Favor efetuar o login!");
      this.navigation.goLogin();
      return false;
    }
    return true;
  }
}
