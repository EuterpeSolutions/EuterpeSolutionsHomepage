import { Component, OnInit } from '@angular/core';

import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  links = [
    {
      title: 'Home',
      link: '/home',
      active: false,
    }, {
      title: 'Services',
      link: '/services',
      active: false,
    }, {
      title: 'Contact',
      link: '/contact',
      active: false,
    }, {
      title: 'About',
      link: '/about',
      active: false,
    }, {
      title: 'Blog',
      link: '/blog',
      active: false,
    }
  ]

  constructor(private router: Router) {
    router.events.filter(event => event instanceof NavigationEnd)
    .subscribe((event) => {
      for( let i = 0; i < this.links.length; i++ ) {
        if(this.links[i].link === (event as NavigationEnd).url){
          this.links[i].active = true;
        } else {
          this.links[i].active = false;
        }
      }
    })
  }

  ngOnInit() {
  }

}
