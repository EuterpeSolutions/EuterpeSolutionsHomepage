import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

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
          'text': 'Your website should be the forefront of your\
                   business or project in the digital space. We promise to\
                   deliver websites that are professionally made,\
                   technically advanced and aesthetically appealing.',
          'icon': 'file-text',
      } , {
          'title': 'Wordpress Setup',
          'text': 'Want a website using the most popular blogging\
                   platform in the market? We got you covered.\
                   We deliver customizable Wordpress sites or blogs.',
          'icon': 'wordpress',
      } , {
          'title': 'Feature Development',
          'text': 'Need your current website revised or improved?\
                   We can update your site, develop new features or\
                   improve upon an existing code base.',
          'icon': 'bolt',
      } , {
          'title': 'Technical Consulting',
          'text': 'Want consultation ? Come to us. We do consultation \
                  on your website and how it can be improved or built.\
                  In addition to using the best technology available.\
                  We also do consultation on your Social Media prescence\
                  and how to improve your online prescence. ',
          'icon': 'lightbulb-o',
      },
    ]
  ]

  testimonials = [
    [
      {
        'name': 'Kate Bach',
        'message': '"Euterpe Solutions is a team of professionals with sharp skills, quick response time, and creative solutions. The changes Euterpe created within my tech infrastructure has freed up enough time for me to double in size without having to double myself nor my staff. To say that I am pleased would be an understatement. I award this team 5 stars, 10 thummbs up, and the highest recommendation possible. I already have my next 2 projects lined up with Euterpe Solutions."'
      }
    ]
  ]

  // Which bootstrap col to use for the cards
  bootstrapCol:string;


  constructor(private http: HttpClient) {
    // Which bootstrap col to use for the cards. Determined by 12 / # of cards
    // Ex. col-md-6 if there are 2 cards
    this.bootstrapCol = 'col-md-' + (12 / this.cards[0].length).toString() + ' col-sm-' + (12 / this.cards[0].length).toString();
  }

  ngOnInit() {}

}
