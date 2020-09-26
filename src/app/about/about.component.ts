import { Component, OnInit } from '@angular/core';
import {
  trigger,
  transition,
  animate,
  style,
  keyframes,
} from '@angular/animations';
import { DataService } from '../data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  constructor(private readonly service: DataService) {}

  ngOnInit(): void {}

  getAbout() {
    return this.service.about();
  }

  getGithubAccount() {
    return this.service.githubLinkAccount();
  }
}
