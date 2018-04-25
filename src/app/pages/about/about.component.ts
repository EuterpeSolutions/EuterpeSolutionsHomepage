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
  topRowPClass = 'text-center'
  bootstrapCol: string;
  cards = [
    [
      {
        'title': 'Pierce Matthews',
        'text': `Pierce Matthews is a Software Developer with 3 years experience. He has worked in several roles, including Full-Stack Develop, Team Lead, and QA Tester. In his free time he enjoys playing guitar and reading.`
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
