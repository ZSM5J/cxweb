import { Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.comonent';
import { TutorialComponent } from './components/tutorial/tutorial.comonent';
import { ExamplesComponent } from './components/examples/examples.comonent';

export const AppRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { title: 'CX Programming Language' }
  },
  {
    path: 'tutorial',
    component: TutorialComponent,
    data: { title: 'Tutorial' }
  },
  {
    path: 'examples',
    component: ExamplesComponent,
    data: { title: 'Examples' }
  },

]
