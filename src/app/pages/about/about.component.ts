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
        'src': '/assets/image/AA_464.jpg'
        'title': 'Lawton Mizell - Full Stack Developer',
        'text': `Lawton Mizell is a Software Developer with 3 years of experience. He has worked in roles such as full stack development,
          data engineer, and QA Tester. He strives to create quality products with an emphasis on good code
          and efficient design.`
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
