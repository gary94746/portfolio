import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { map, concatAll } from 'rxjs/operators';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent implements OnInit {
  constructor(
    private readonly service: DataService,
    private datePipe: DatePipe
  ) {}

  ngOnInit(): void {}

  getWorkHistory() {
    return this.service.workHistory().pipe(
      map((works) => {
        return works.sort((a, b) => b.from.getTime() - a.from.getTime());
      })
    );
  }

  dateP(date: Date) {
    return this.datePipe.transform(date, 'MMMM yyyy');
  }
}
