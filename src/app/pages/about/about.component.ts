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
        'text': `Tyler Moon is a Software Developer with experience in serveral different industries.
                 He has also worked as a Dev Ops engineer and System Administrator. Since learning to
                 program in high school, Tyler has always been on the lookout for new and exciting technologies
                 to learn.`
      }
    ],
  ]
  constructor() { }

  ngOnInit() {
   this.bootstrapCol = 'col-md-' + (12 / this.cards[0].length).toString();
  }

}
