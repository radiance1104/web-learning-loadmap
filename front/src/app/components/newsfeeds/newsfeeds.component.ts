import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newsfeeds',
  templateUrl: './newsfeeds.component.html',
  styleUrls: ['./newsfeeds.component.scss']
})
export class NewsfeedsComponent implements OnInit {

  newsfeeds = [
    {
      message: 'あけましておめでとう！',
      createdAt: new Date('2020-01-01T02:23:30'),
    },
    {
      message: 'メリークリスマス！',
      createdAt: new Date('2019-12-25T10:52:02'),
    },
    {
      message: 'ハッピーハロウィーン！',
      createdAt: new Date('2019-10-31T20:13:55'),
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
