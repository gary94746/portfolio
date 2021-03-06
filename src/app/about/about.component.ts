import { Component, OnInit } from '@angular/core';
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

  getEmail() {
    return this.service.email();
  }

  getSocialMedia() {
    return this.service.getSocialMedia();
  }
}
