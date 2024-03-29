import { Component } from '@angular/core';
import { i18n } from '../i18n';
import {ConfigurationService} from '../configuration.service';
import {AlertController} from '@ionic/angular';



@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public dict: Record<string, Record<string, string>> = {
    de: {
      pageTitle: 'Dein Führer',
      pageTitleImageSource: 'Quelle',
      pageMorning: 'Guten Morgen, ich bin heute dein Führer',
      pageAfternoon: 'Guten Tag, ich bin heute dein Führer',
      pageEvening: 'Guten Abend, ich bin heute dein Führer',
      pageSubtitle: 'Noch keinen Plan für heute Abend? Dann machen wir uns jetzt einen!',
      areaAll: 'Ganzes Gebiet',
      areaAltstadt: 'Altstadt',
      areaInnenstadt: 'Innenstadt',
      areaSüdstadt: 'Südstadt',
      areaPoppelsdorf: 'Poppelsdorf',
      areaWeststadt: 'Weststadt',
      pagekurz: 'kurz',
      pagemittel: 'mittel',
      pagelang: 'lang',
      pageArea: 'Umfeld',
      pageRoute: 'Route',
      pageTime: 'Tag',
      pagehour: 'Uhrzeit',
      pageStart: 'Beginn deine Suche...',
      pageSearch: 'Suche',
      pagemo: 'Montag',
      pagetu: 'Dienstag',
      pagewe: 'Mittwoch',
      pageth: 'Donnerstag',
      pagefr: 'Freitag',
      pagesa: 'Samstag',
      pagesu: 'Sonntag',
    },
    en: {
      pageTitle: 'Your Guide, tonight',
      pageTitleImageSource: 'Source',
      pageMorning: 'Good morning, I am your guide',
      pageAfternoon: 'Hello, I am your guide',
      pageEvening: 'Hey, I am drunk',
      pageSubtitle: 'Have not got a plan yet? Lets do one!',
      areaAll: 'Whole area',
      areaAltstadt: 'Old Town',
      areaInnenstadt: 'Downtown',
      areaSüdstadt: 'Bonn South',
      areaPoppelsdorf: 'Poppelsdorf',
      areaWeststadt: 'Bonn West',
      pagekurz: 'short',
      pagemittel: 'medium',
      pagelang: 'long',
      pageArea: 'Area',
      pageRoute: 'Route',
      pageTime: 'Day',
      pagehour: 'Time',
      pageStart: 'Start your Search...',
      pageSearch: 'Search',
      pagemo: 'Monday',
      pagetu: 'Tuesday',
      pagewe: 'Wednesday',
      pageth: 'Thursday',
      pagefr: 'Friday',
      pagesa: 'Saturday',
      pagesu: 'Sunday',
    },
  };

  constructor(
      public configurationService: ConfigurationService,
      public alertController: AlertController,
  ) {}

  public i18n(key, fallback = '') {
    return i18n(this.dict)(this.configurationService.language, key, fallback);
  }

  public getHours() {
    const now = new Date();
    return now.getHours();
  }

  public ionViewWillEnter() {
    const configurationService = this.configurationService;

    if (this.configurationService.languageAlreadySet === false) {
      this.alertController.create({
        header: 'Select your language / Wählen Sie Ihre Sprache',
        buttons: [
            {text: 'Deutsch', handler() {configurationService.language = 'de'; configurationService.languageAlreadySet = true; }},
            {text: 'English', handler() {configurationService.language = 'en'; configurationService.languageAlreadySet = true; }},
        ]
      }).then(alert => {
        alert.present();
      });
    }
  }
}
