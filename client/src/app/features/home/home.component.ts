import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  repository;

  ngOnInit(): void {
  }

  constructor(private sanitizer:DomSanitizer) { 
    this.repository = sanitizer.bypassSecurityTrustUrl('https://github.com/hnslopez/nestjs-mongodb-angular');
  }

}