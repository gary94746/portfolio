import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  constructor(private service: DataService) {}

  ngOnInit(): void {}

  getSkills() {
    return this.service.technologies();
  }
}
