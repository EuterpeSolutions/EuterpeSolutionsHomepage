import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: '../pages.component.html',
  styleUrls: ['../pages.component.css']
})
export class HomeComponent implements OnInit {
  topRowClass = 'tall-row'
  headerTitle = 'Affordable. Simple. Solutions.'
  topRowH2Class = 'text-center'
  pageInfo = `Delivering quick professional websites for any budget`
  topRowPClass = 'text-center'
  isHome = true
  bottomRowClass = 'content'
  // Data for the cards
  cards = [
    [
      {
          'title': 'Web Development',
          'text': 'Some quick example text to build on the card\
                  title and make up the bulk of the card\'s content.',
          'icon': 'file-text',
      } , {
          'title': 'Wordpress Setup',
          'text': 'Some quick example text to build on the card\
                  title and make up the bulk of the card\'s content.',
          'icon': 'wordpress',
      } , {
          'title': 'Feature Development',
          'text': 'Some quick example text to build on the card\
                  title and make up the bulk of the card\'s content.',
          'icon': 'bolt',
      } , {
          'title': 'Technical Consulting',
          'text': 'Some quick example text to build on the card\
                  title and make up the bulk of the card\'s content.',
          'icon': 'lightbulb-o',
      },
    ]
  ]

  // Which bootstrap col to use for the cards
  bootstrapCol:string;


  constructor() {
    // Which bootstrap col to use for the cards. Determined by 12 / # of cards
    // Ex. col-md-6 if there are 2 cards
    this.bootstrapCol = 'col-md-' + (12 / this.cards[0].length).toString() + ' col-sm-' + (12 / this.cards[0].length).toString();
  }

  ngOnInit() {}

  contact(regForm:NgForm){
   console.log(regForm);
  }

}
