import { Inject, Injectable } from '@angular/core';

@Injectable()
export class AppConfig {

  private mockData = {};

  constructor() {
  }

  public getEnv(): string {
    return "test";
  }

  public get(key: string): any {
    return this.mockData[key];
  }
  public getApi(key: string): string {
    return "local.mock-data/" + key;
  }
}
