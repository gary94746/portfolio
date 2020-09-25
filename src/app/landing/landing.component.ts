import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  @ViewChild('topnav') topNav: ElementRef;
  @ViewChild('menuToggler') menuToggler: ElementRef;

  name = 'Jorge Edgar Sánchez Chávez';
  title = 'Angular | NestJS Web Developer';

  constructor() {}

  ngOnInit(): void {}

  toggleClass() {
    this.menuToggler.nativeElement.classList.toggle('open');
    this.topNav.nativeElement.classList.toggle('open');
  }
}
