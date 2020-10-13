import { Injectable } from '@angular/core';
import { of } from 'rxjs';

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
    const about = `I'm from Mexico, I like to solve problems and implement new features.\n
			Teach other people that are new in this world.
			My favorite programing language is Typescript. I like to know new people.`;
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
        experienceInYears: 2,
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
        icon: 'fas fa-cat',
        color: 'red',
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
      tasks?: string[];
    }[] = [
      {
        workName: 'Aserradero Cordón Grande',
        role: 'Junior Software Developer',
        from: new Date(2018, 6),
        to: new Date(2018, 8),
        jobDescription: 'Develop desktop app with Javafx and PostgreSQL',
        tasks: [
          'Design the database',
          'Use XP methodology',
          'Use JavaFx (Fronted), Postgres DB',
          'Design and Develop the UI',
        ],
      },
      {
        workName: 'CIEE TecNM campus Oaxaca',
        role: 'Junior Software Developer',
        from: new Date(2020, 1),
        to: new Date(2020, 6),
        jobDescription:
          'Modules development in miniservice architecture with angular, NestJs and Mongo',
        tasks: [
          'Design an architecture for the system',
          'Work with miniservice architecture',
          'NestJs Bakend implementation.',
          'Token Base authentication',
          'API design, Swagger documentation',
          'e2e Test, supertest',
          'Angular Fronted implementation.',
          'Mongo and Mongo GridFS, database and media storage.',
          'Work with SCRUM',
        ],
      },
    ];
    return of(works);
  }

  projects() {
    const projects: {
      projectName: string;
      technologies: string[];
      img: string;
      tasks: string[];
      links?: { name: string; link: string }[];
    }[] = [
      {
        projectName: 'Gallery App',
        technologies: [
          'NestJs',
          'Angular',
          'PostgreSQL',
          'Docker',
          'Heroku',
          'Netlify',
          'Typescript',
        ],
        img:
          'https://raw.githubusercontent.com/gary94746/gallery-angular/master/src/assets/Screenshot_20201012_202342.png',
        tasks: [
          'Reactive form validation',
          'Responsive Design',
          'Image download',
          'Image size validation',
          'Data Validation',
          'Image resizing with sharp',
          'Image download, upload',
          'Files manipulation',
          'Config module, async injection',
          'PostgreSQL',
        ],
        links: [
          {
            name: 'Online App',
            link: 'https://gallant-meitner-416426.netlify.app/',
          },
          {
            name: 'NestJs Code',
            link: 'https://github.com/gary94746/gallery-nestjs',
          },
          {
            name: 'Angular Code',
            link: 'https://github.com/gary94746/gallery-angular',
          },
        ],
      },
      {
        projectName: 'BFS and IDDFS',
        technologies: ['Typescript', 'Node'],
        img:
          'https://previews.dropbox.com/p/thumb/AA9dJdH0rK6uiL5JtM_RmNgUow7FIUeRclIJkNjYDWKauQkQF7egJN6Dtuj6k1Qk82wkmlXwIkBZqzh0bso93TS_kxxiM9NJ4mlVCKsIpdhlNuuIpxFowq8FQB4Z51M1MOxgBGO7NwIDLB11JvXxBxLeAhDPFF-_5AXa2HkoWMX-YCVqFIaiuQDoaXQk9YygC1f4MplBHYnbFTNwAMhro1V7KZ3DZ0qQsg1KBtGg_hh0pNAxanUcrGqMaM5VI2rcbSSKGU-B1eo_BpcsPuAYzJ527-rwVT80g32149D4Xnyx2nRH1HKAS-lDMAc6Mc9ERt7gsVCNx25LGmNnzm-xT-IMaAlekTqE43Y9gF2-LjhfGA/p.png?fv_content=true&size_mode=5',
        tasks: [
          'DFS implementation',
          'IDDFS implementation',
          'Png Three image generation',
          'Export generated three in dot friendly file',
        ],
        links: [
          {
            name: 'Source code',
            link: 'https://github.com/gary94746/bfs_dfs',
          },
        ],
      },
    ];

    return of(projects);
  }
}
