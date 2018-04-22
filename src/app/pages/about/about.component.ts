import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: '../pages.component.html',
  styleUrls: ['../pages.component.css']
})
export class AboutComponent implements OnInit {
  topRowClass = 'top-row'
  headerTitle = 'About'
  topRowH2Class = 'text-center'
  pageInfo = `Euterpe Solutions is a software contracting LLC started by three University of South
              Carolina Computer Science graduates.`
  bootstrapCol: string;
  cards = [
    [
      {
        'title': 'Pierce Matthews',
        'text': `bio goes here`
      },
      {
        'title': 'Lawton Mizell',
        'text': `bio goes here`
      },
      {
        'title': 'Tyler Moon',
        'text': `bio goes here`
      }
    ],
  ]
  constructor() { }

  ngOnInit() {
   this.bootstrapCol = 'col-md-' + (12 / this.cards[0].length).toString();
  }

}
