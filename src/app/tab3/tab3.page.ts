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
    subtitle: 'Geographisches Institut der Universität Bonn',
    studentProject: 'Studentisches Projekt',
    GeoApp: 'Dies ist ein Projekt vom Geo-App Kurs des Geographischen Instituts der Universität Bonn',
    furtherInformation: 'weiterführende Informationen',
    contactPerson: 'Ansprechpartner',

  },
  en: {
    pageTitle: 'Settings',
    pageLang: 'Language',
    pageDe: 'German',
    pageEng: 'English',
    subtitle: ' Department of Geography, Bonn University',
    studentProject: 'Student project',
    GeoApp: 'This is a student project within the Geo-App-course of the Geographical Institute of the University Bonn',
    furtherInformation: 'further information',
    contactPerson: 'contact person',
  },

  };

    constructor(
      public configurationService: ConfigurationService,

  ) {}

  public i18n(key, fallback = '') {
    return i18n(this.dict)(this.configurationService.language, key, fallback);
  }
}
