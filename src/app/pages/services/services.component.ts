import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  pageInfo = `Euterpe Solutions offers a wide variety of website, and website related, services. We
              strive to maintain affordable prices, convienent solutions, and friendly service.`
  headerTitle = 'Services'
  cards = [
    [
      {
        'title': 'Static',
        'text': `
          A static website contains web pages that have fixed content. Each page
          displays the same information to every visitor. Static sites are the most
          basic type of website and also the easiest to create.`,
        'advantages': [
          'Simple and easy to create',
          'Cheaper than Dynamic webapps',
          'Content changes infrequently',
        ],
        'prices': [
          '$1,000 base cost (includes the basic layout and 3 pages)',
          '$100 per additional page',
          '$50 per month for hosting (See hosting section for more details)'
        ]
      },
      {
        'title': 'Dynamic',
        'text': `
          A dynamic website (also called a web application) contain real-time generated
          web pages. Dynamic websites are typically bigger than static websites,
          easily containing hundreds or even thousands of pages.`,
        'advantages': [
          'Easier to manage many pages',
          'Can update content quickly',
          'Can have user generated content',
        ],
        'prices': [
          '$2,000 base cost',
          '$50 per hour of work',
          'Contact us for a quote'
        ]
      },

    ],
    [
      {
        'title': 'WordPress',
        'text': `
          WordPress is the most popular website management or blogging system in
          use with more than 60 million users. WordPress blogs can either be created
          on WordPress.com or, because it is free and open-source, on a server running
          WordPress.
        `,
        'advantages': [
          'No technical skills needed to update content',
          'Common platform with many themes and widgets',
        ],
        'prices': [
          '$1,000 base cost',
          '$100 per page',
        ]
      },
      {
        'title': 'Hosting',
      },
    ],
    [
      {
        'title': 'Consulting',
      },
      {
        'title': 'Security',
      },
    ]
  ]

  constructor() { }

  ngOnInit() {
  }

}
