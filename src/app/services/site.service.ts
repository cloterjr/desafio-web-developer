import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Site } from './../models/site';
import { Categorie } from '../models/categorie';

@Injectable()
export class SiteService {
  private sitesUrl = 'app/sites';  // URL to web api
  private categoriesUrl = 'app/categories';  // URL to web api

  constructor(private http: Http) { }

  getSiteConfiguration(): Promise<Array<Site>> {
    return this.http
      .get(this.sitesUrl)
      .toPromise()
      .then((response) => {
        return response.json().data as Site[];
      })
      .catch(this.handleError);
  }

  getCategories(): Promise<Array<Categorie>> {
    return this.http
      .get(this.categoriesUrl)
      .toPromise()
      .then((response) => {
        return response.json().data as Categorie[];
      })
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}