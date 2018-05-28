import { Component, OnInit } from '@angular/core';

import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  // All the links for the navigation
  links = [
    {
      title: 'Home',
      link: '',
      active: false,
    }, {
      title: 'Services',
      link: '/services',
      active: false,
    }, {
      title: 'Portfolio',
      link: '/portfolio',
      active: false,
    }, {
      title: 'About',
      link: '/about',
      active: false,
    }
  ]

  constructor(private router: Router) {
    // When a user navigates to a page change the active flag to true so that the
    // Navigation indicates which is the current page
    router.events.filter(event => event instanceof NavigationEnd)
    .subscribe((event) => {
      for( let i = 0; i < this.links.length; i++ ) {
        if(this.links[i].link === (event as NavigationEnd).url){
          this.links[i].active = true;
        } else {
          this.links[i].active = false;
        }
      }
    });
  }

  ngOnInit() {
  }

}
