import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  userName() {
    return of('Jorge Edgar Sánchez Chávez');
  }

  title() {
    return of('Web Developer');
  }

  about() {
    const about = 'I like to solve problems, implement new features';
    return of(about);
  }

  getSocialMedia() {
    const socialMedia: {
      icon: string;
      socialMediaName: string;
      link: string;
    }[] = [
      {
        icon: 'fab fa-github-alt',
        socialMediaName: 'GitHub',
        link: 'https://github.com/gary94746',
      },
    ];

    return of(socialMedia);
  }

  technologies() {
    const stack: {
      technologyName: string;
      experienceInYears: number;
      icon?: string;
      color?: string;
    }[] = [
      {
        technologyName: 'Typescript',
        experienceInYears: 2,
        icon: 'fab fa-js-square',
        color: '#3178c6',
      },
      {
        technologyName: 'Javascript',
        experienceInYears: 1,
        icon: 'fab fa-js-square',
        color: 'yellow',
      },
      {
        technologyName: 'Java',
        experienceInYears: 1,
        icon: 'fab fa-java',
        color: '#dd0031',
      },
      {
        technologyName: 'Angular',
        experienceInYears: 1,
        icon: 'fab fa-angular',
        color: '#dd0031',
      },
      {
        technologyName: 'NestJs',
        experienceInYears: 1,
        icon: 'fab fa-node-js',
        color: 'green',
      },
      {
        experienceInYears: 1,
        technologyName: 'PostgreSQL',
        icon: 'fas fa-database',
        color: 'white',
      },
      {
        technologyName: 'Mongo',
        icon: 'fas fa-database',
        experienceInYears: 1,
        color: 'white',
      },
    ];

    return of(stack);
  }

  workHistory() {
    const works: {
      workName: string;
      from: Date;
      to: Date;
      role: string;
      jobDescription: string;
    }[] = [
      {
        workName: 'Aserradera Cordon Grande',
        role: 'Junior Software Developer',
        from: new Date(2018, 6),
        to: new Date(2018, 8),
        jobDescription: 'Develop desktop app with Javafx and PostgreSQL',
      },
      {
        workName: 'CIEE TecNM campus Oaxaca',
        role: 'Junior Software Developer',
        from: new Date(2020, 1),
        to: new Date(2020, 6),
        jobDescription:
          'Modules development in miniservice architecture with angular, NestJs and Mongo',
      },
    ];
    return of(works);
  }

  projects() {
    const projects: {
      projectName: string;
      technologies: string[];
      img?: string;
    }[] = [
      {
        projectName: 'DFS, BFS algorithm',
        technologies: ['typescript'],
      },
      {
        projectName: 'Multitenant',
        technologies: ['Angular', 'NestJs'],
      },
    ];

    return of(projects);
  }
}