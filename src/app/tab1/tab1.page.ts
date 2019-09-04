import { Component } from '@angular/core';
import { i18n } from '../i18n';
import {ConfigurationService} from '../configuration.service';



@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public dict: Record<string, Record<string, string>> = {
    de: {
      pageTitle: 'Dein Führer',
      pageMorning:'Guten Morgen, ich bin heute dein Führer',
      pageAfternoon: 'Guten Tag, ich bin heute dein Führer',
      pageEvening: 'Guten Abend, ich bin heute dein Führer',
      pageSubtitle: 'Noch keinen Plan für heute Abend? Dann machen wir uns jetzt einen!',
    },
    en: {
      pageTitle: 'Your Guide, tonight',
      pageMorning: 'Good morning, I am your guide',
      pageAfternoon: 'Hello, I am your guide',
      pageEvening: 'Hey, I am drunk',
      pageSubtitle: 'Have not got a plan yet? Lets do one!',
    },
  };

  constructor(
      public configurationService: ConfigurationService
  ) {}

  public i18n(key, fallback = '') {
    return i18n(this.dict)(this.configurationService.language, key, fallback);
  }

  public getHours() {
    const now = new Date();
    return now.getHours();
  }
}
