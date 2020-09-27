import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DataService } from '../data.service';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  @ViewChild('topnav') topNav: ElementRef;
  @ViewChild('menuToggler') menuToggler: ElementRef;

  constructor(private readonly service: DataService) {}

  ngOnInit(): void {}

  toggleClass() {
    this.menuToggler.nativeElement.classList.toggle('open');
    this.topNav.nativeElement.classList.toggle('open');
  }

  landingInfo() {
    return combineLatest([this.service.userName(), this.service.title()]);
  }

  goAbout() {
    this.toggleClass();
    const element = document.getElementById('about');
    element.scrollIntoView();
  }

  goSkills() {
    this.toggleClass();
    const element = document.getElementById('skills');
    element.scrollIntoView();
  }

  goProjects() {
    this.toggleClass();
    const element = document.getElementById('projects');
    element.scrollIntoView();
  }

  goExperience() {
    this.toggleClass();
    const element = document.getElementById('experience');
    element.scrollIntoView();
  }
}
