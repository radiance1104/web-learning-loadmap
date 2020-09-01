import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  email = '';
  password = '';

  constructor() { }

  ngOnInit(): void {
  }

}
