import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // Data for the cards
  cards = [
    {
        'title': 'Web Development',
        'text': 'Some quick example text to build on the card\
                title and make up the bulk of the card\'s content.',
        'bulletPoints': [
          'A point',
          'Another point',
          'Yay points',
          'another one',
        ],
        'route': '/services',
    } , {
        'title': 'Wordpress Setup',
        'text': 'Some quick example text to build on the card\
                title and make up the bulk of the card\'s content.',
        'bulletPoints': [
          'A point',
          'Another point',
          'Yay points',
          'another one',
        ],
        'route': '/services',
    } , {
        'title': 'Feature Development',
        'text': 'Some quick example text to build on the card\
                title and make up the bulk of the card\'s content.',
        'bulletPoints': [
          'A point',
          'Another point',
          'Yay points',
          'another one',
        ],
        'route': '/services',
    } , {
        'title': 'Technical Consulting',
        'text': 'Some quick example text to build on the card\
                title and make up the bulk of the card\'s content.',
        'bulletPoints': [
          'A point',
          'Another point',
          'Yay points',
          'another one',
        ],
        'route': '/services',
    },
  ]

  // Which bootstrap col to use for the cards
  bootstrapCol:string;


  constructor() {
    // Which bootstrap col to use for the cards. Determined by 12 / # of cards
    // Ex. col-md-6 if there are 2 cards
    this.bootstrapCol = 'col-md-' + (12 / this.cards.length).toString();
  }

  ngOnInit() {}

}
