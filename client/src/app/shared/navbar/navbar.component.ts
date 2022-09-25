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
    {link:'/', name:'HOME', right:false},
    {link:'/login',name:'INICIAR SESIÓN', right:true},
  ];

  readonly menuAuth = [
    {link:'/', name:'HOME', right:false},
  ];


  @Input()
  isCollapsed?: boolean;

  @Output() 
  collapse = new EventEmitter<boolean>();

  changeCollapse(value: boolean) {
    this.collapse.emit(value);
  }

  logout(){
    this.authFacade.logout();
  }
  
  constructor(private authFacade: AuthFacade) { }

  ngOnInit(): void {
  }

}
