import { HostListener, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {



  ngOnInit(): void {
    //title
    this.router.events.pipe(
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
    ).subscribe((title: string) => {
      if (title) {
        this.titleService.setTitle(`DEMO - ${title}`);
      }
    });
  }


  constructor(
    private router: Router,
    private titleService: Title,
    public translate: TranslateService) {
    
    let defaultLenguage = localStorage.getItem('locale') || 'es-CL';

    if(!['es-CL', 'en-US'].includes(defaultLenguage)){
      defaultLenguage = 'es-CL';
      localStorage.setItem('locale', defaultLenguage);
    } 

    translate.setDefaultLang(defaultLenguage || 'es-CL');
  }

  public switchLanguage(language: 'es-CL' | 'en-US'): void {
    localStorage.setItem('locale', language);
    this.translate.use(language);
  }

}
