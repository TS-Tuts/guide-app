import { Component } from '@angular/core';
import { i18n } from '../i18n';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  public dict: Record<string, Record<string, string>> = {
    de: {},
    en: {},
  };

  public lang = 'en';
  constructor() {}

  public i18n(key, fallback = '') {
    return i18n(this.dict)(this.lang, key, fallback);
  }
}
