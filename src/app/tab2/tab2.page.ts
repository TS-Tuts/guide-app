import {Component, ViewChild} from '@angular/core';
import {MapComponent} from '@yaga/leaflet-ng2';
import {FeatureCollection, LineString, Point, Polygon} from 'geojson';

import { dataModel } from './tab2.simple-model';
import {HttpClient} from '@angular/common/http';
import { i18n } from '../i18n';
import {ConfigurationService} from '../configuration.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
    public dict: Record<string, Record<string, string>> = {
        de: {},
        en: {},
    };


  @ViewChild(MapComponent, {static: true}) private mapComponent: MapComponent;
  private geoJSONMap: Map<string, Promise<FeatureCollection<LineString | Polygon | Point>>> = new Map();
  public data = dataModel;

  constructor(
      public configurationService: ConfigurationService,
      private http: HttpClient,
  ) {}

  public getFeatureCollection(path: string): Promise<FeatureCollection<LineString | Polygon | Point>> {
    if (this.geoJSONMap.has(path)) {
      return this.geoJSONMap.get(path);
    }
    const promise = this.http.get('/assets/geojson/' + path).toPromise() as Promise<FeatureCollection<LineString | Polygon | Point>>;

    this.geoJSONMap.set(path, promise);
    return promise;
  }

  public ionViewWillEnter() {
    this.mapComponent.invalidateSize();
  }

    public i18n(key, fallback = '') {
        return i18n(this.dict)(this.configurationService.language, key, fallback);
    }
}
