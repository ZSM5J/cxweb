import { Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.comonent';
import { TutorialComponent } from './components/tutorial/tutorial.comonent';

export const AppRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'tutorial',
    component: TutorialComponent
  },

]
