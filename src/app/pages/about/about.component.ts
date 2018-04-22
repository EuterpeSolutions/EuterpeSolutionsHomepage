import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: '../services/services.component.html',
  styleUrls: ['../services/services.component.css']
})
export class AboutComponent implements OnInit {
  pageInfo = `Euterpe Solutions is a software contracting LLC started by three University of South
              Carolina Computer Science graduates.`
  headerTitle = 'About'
  cards = [
    [
      {
        'title': 'Pierce Matthews',
        'text': `bio goes here`
      }
    ],
    [
      {
        'title': 'Lawton Mizell',
        'text': `bio goes here`
      }
    ],
    [
      {
        'title': 'Tyler Moon',
        'text': `bio goes here`
      }
    ]
  ]
  constructor() { }

  ngOnInit() {
  }

}
