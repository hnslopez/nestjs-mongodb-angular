import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AuthFacade } from 'src/app/auth/store/auth.facade';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLoggedIn$ = this.authFacade.isLoggedIn$

  @Input()
  isCollapsed?: boolean;

  @Output() 
  collapse = new EventEmitter<boolean>();

  changeCollapse(value: boolean) {
    this.collapse.emit(value);
  }
  
  constructor(private authFacade: AuthFacade) { }

  ngOnInit(): void {
  }

}
