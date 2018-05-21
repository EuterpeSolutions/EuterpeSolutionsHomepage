import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: '../pages.component.html',
  styleUrls: ['../pages.component.css']
})
export class PortfolioComponent implements OnInit {
  topRowClass = 'top-row'
  headerTitle = 'Portfolio'
  topRowH2Class = 'text-center'
  pageInfo = `View our work.`
  bottomRowClass = 'content'

  bootstrapCol: string;
  cards = [
    [
      {
        'title': 'AdviseMe',
        'link': 'http://theadviseme.com/landing',
        'src': '/assets/image/advise-me-2.png',
        'text': `A web app that will assist college students through the majority
                of advising requirements while in pursuit of a degree. Developed with
               Node, Angular, mongodb.`
      },
      {
        'title': 'Bodylight',
        'link': 'https://sccapstone.github.io/Bodylight/',
        'src': '/assets/image/body-light.PNG',
        'text': `An app that teaches excercises. Developed with Android.`
      },
    ],
  ]
  constructor() { }

  ngOnInit() {
    this.bootstrapCol = 'col-md-' + (12 / this.cards[0].length).toString();
  }

}
