import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: '../pages.component.html',
  styleUrls: ['../pages.component.css']
})
export class ServicesComponent implements OnInit {
  topRowClass = 'top-row'
  headerTitle = 'Services'
  topRowH2Class = 'text-center'
  pageInfo = `Euterpe Solutions offers a wide variety of website, and website related, services. We
              strive to maintain affordable prices, convienent solutions, and friendly service.`
  bootstrapCol: string;
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
          WordPress is the most popular CMS (Content Managment System ) in
          use with more than 60 million users. WordPress sites can either be created
          on WordPress.com or, because it is free and open-source, on a server running
          WordPress.
        `,
        'advantages': [
          'No technical skills needed to update content',
          'Common platform with many themes and widgets',
          'Ease of use',
          'built-in blog',
          'Extend functionality with plugins',
        ],
        'prices': [
          '$1,000 base cost',
          '$100 per page',
        ]
      },
      {
        'title': 'Hosting + Maintenance',
        'text': `
          An internet hosting service allows your website to be accessible via the
          World Wide Web. In addition we will do a monthly maintenance on your
          website to conduct necessary updates and security implementations.
        `,
        'advantages': [
          'Prevent errors from out-of-date software',
          'Prevent security risk',
        ],
        'prices': [
          '$5-$30/month (depending on website traffic and functionality)'
        ]
      },
    ],
    [
      {
        'title': 'Social Media Consulting, Website Consulting',
        'text': `
          We do consultation on your Social Media prescence and how to increase
          your online prescence. We also do consultation on your website and how
          it can be improved or how your website can be built. In addition to using
          the best technology available.
        `,
        'prices': [
          'Consulting is an on basis rate',
        ],
      },
      {
        'title': 'Security',
        'text': `
          Security includes services such as pentesting your website to detect
          vulnerabilities and recommend the best course of action. In addition,
          if the vulnerability patch is within our scope we would implement a fix.
        `,
        'prices': [
          'Security is an on basis rate',
        ]
      },
    ]
  ]

  constructor() { }

  ngOnInit() {
    this.bootstrapCol = 'col-md-' + (12 / this.cards[0].length).toString();
  }

}
