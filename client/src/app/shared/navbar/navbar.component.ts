import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AuthFacade } from 'src/app/auth/store/auth.facade';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  userData$ = this.authFacade.user$;

  readonly menu = [
    {link:'/', name:'MAIN.NAVBAR.MAIN_PAGE', right:false},
    {link:'/angular', name:'MAIN.NAVBAR.ANGULAR'},
    {link:'/nestjs', name:'MAIN.NAVBAR.NESTJS'},
    {link:'/mongodb', name:'MAIN.NAVBAR.MONGODB'},
    {link:'/about', name:'MAIN.NAVBAR.ABOUT', right:false},

  ];


  logout(){
    this.authFacade.logout();
  }
  
  constructor(private authFacade: AuthFacade) { }

  ngOnInit(): void {
  }

}
