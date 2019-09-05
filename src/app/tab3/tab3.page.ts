import { Component } from '@angular/core';
import { i18n } from '../i18n';
import {ConfigurationService} from '../configuration.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
    public dict: Record<string, Record<string, string>> = {
  de: {
    pageTitle: 'Einstellungen',
    pageLang: 'Sprache',
    pageDe: 'Deutsch',
    pageEng: 'Englisch',

  },
  en: {
    pageTitle: 'Settings',
    pageLang: 'Language',
    pageDe: 'German',
    pageEng: 'English',

  },

  };

    constructor(
      public configurationService: ConfigurationService,

  ) {}

  public i18n(key, fallback = '') {
    return i18n(this.dict)(this.configurationService.language, key, fallback);
  }
}
