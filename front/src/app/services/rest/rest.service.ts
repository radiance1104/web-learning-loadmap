import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { Response } from './data/response';
import { Newsfeeds } from './data/newsfeeds';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(
    private httpClient: HttpClient
  ) { }

  async searchNewsFeeds(): Promise<Response<Newsfeeds>> {
    return new Promise((resolve, reject) => {
      const url = environment.rest.domain + '/newsfeeds';
      this.httpClient.get(url).toPromise().then(response => {
        const newsfeeds = new Newsfeeds();
        newsfeeds.decode(response);
        resolve(new Response(newsfeeds));
      }).catch(error => {
        console.error(error);
        reject(error);
      });
    });
  }

  async createNewsFeed(message: string): Promise<Response<null>> {
    return new Promise((resolve, reject) => {
      const url = environment.rest.domain + '/newsfeeds';
      const body = {
        message: message,
        createdAt: new Date()
      };
      this.httpClient.post(url, body).toPromise().then(response => {
        resolve(new Response(null));
      }).catch(error => {
        console.error(error);
        reject(error);
      });
    });
  }
}
