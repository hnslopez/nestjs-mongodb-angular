import { HostListener, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isCollapsed = false;
  nbWidth = 0;

  ngOnInit(): void {
    let size =  window.innerWidth;
    this.updateNbWidth(size);

    //title
        this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => {
          let route: ActivatedRoute = this.router.routerState.root;
          let routeTitle = '';
          while (route!.firstChild) {
            route = route.firstChild;
          }
          if (route.snapshot.data['title']) {
            routeTitle = route!.snapshot.data['title'];
          }
          return routeTitle;
        })
      )
      .subscribe((title: string) => {
        if (title) {
          this.titleService.setTitle(`CITT - ${title}`);
        }
      });
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    let size =  window.innerWidth;
    this.updateNbWidth(size);
  }

  updateNbWidth(event: Number) {
    if (event > 768 && this.nbWidth != 80) {
      this.nbWidth = 80;
    }

    if (event < 768 && this.nbWidth != 0) {
      this.nbWidth = 0;
    }
  }

  updateCollapse(event: boolean) {
    this.isCollapsed = event;
  }


  constructor(private router:Router, private titleService: Title){}

}
