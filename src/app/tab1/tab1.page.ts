import { Component } from '@angular/core';
import { i18n } from '../i18n';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public dict: Record<string, Record<string, string>> = {
    de: {pageTitle: 'Übersicht'},
    en: {pageTitle: 'Overview'},
  };

  public lang = 'en';
  constructor() {}

  public i18n(key, fallback = '') {
    return i18n(this.dict)(this.lang, key, fallback);
  }
}
