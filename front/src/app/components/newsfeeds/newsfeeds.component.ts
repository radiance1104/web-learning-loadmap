import { Component, OnInit } from '@angular/core';
import { RestService } from '../../services/rest/rest.service';
import { Newsfeeds } from '../../services/rest/data/newsfeeds';

@Component({
  selector: 'app-newsfeeds',
  templateUrl: './newsfeeds.component.html',
  styleUrls: ['./newsfeeds.component.scss']
})
export class NewsfeedsComponent implements OnInit {

  newsfeeds: Newsfeeds;
  message: string;

  constructor(
    private restService: RestService
  ) { }

  async ngOnInit() {
    try {
      const response = await this.restService.searchNewsFeeds();
      this.newsfeeds = response.data;
    } catch (error) {
      // TODO: display alert dialog.
    }
  }

  async onClickPost() {
    try {
      await this.restService.createNewsFeed(this.message);
    } catch (error) {
      // TODO: display alert dialog.
    }
  }
}
