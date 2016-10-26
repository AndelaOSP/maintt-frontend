import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  catchPhrase = 'Improve your productivity, let us do the worrying for you';
  message = 'Welcome to Maintt issue tracking plartform';
  social = {
    facebook: 'https://www.facebook.com/thisisandela/',
    twitter: 'https://twitter.com/andela_kenya',
    github: 'https://github.com/AndelaOSP'
  };

  constructor() {}

  ngOnInit() {

  }


}
