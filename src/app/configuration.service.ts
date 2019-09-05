import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  constructor() { }

  public language = 'en';
  public languageAlreadySet = false;
  public gpsState = false;
}
