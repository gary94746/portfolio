import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  userName() {
    return of('Jorge Edgar Sanchez Chavez');
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
    const stack: { technologyName: string }[] = [
      { technologyName: 'Angular' },
      { technologyName: 'NestJs' },
    ];

    return of(stack);
  }

  workHistory() {
    const works: {
      workName: string;
      from: string;
      to: string;
      role: string;
      jobDescription: string;
    }[] = [
      {
        workName: 'Aserradera Cordon Grande',
        role: 'Junior Software Developer',
        from: 'June 2018',
        to: 'August 2018',
        jobDescription: 'Develop desktop app with Javafx and PostgreSQL',
      },
      {
        workName: 'CIEE TecNM campus Oaxaca',
        role: 'Junior Software Developer',
        from: 'Febreruary 2020',
        to: 'July 2020',
        jobDescription:
          'Development modules in miniservice architecture with angular and NestJs',
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
