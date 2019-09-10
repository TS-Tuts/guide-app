import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  constructor() { }
  public language = navigator.language.startsWith('de') ? 'de' : 'en';

  // only for unknown languages we want to ask for a language switch.
  public languageAlreadySet = navigator.language.startsWith('de') || navigator.language.startsWith('en');
  public gpsState = false;
}
