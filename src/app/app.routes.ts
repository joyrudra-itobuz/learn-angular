import { Routes } from '@angular/router'
import { AppComponent } from './app.component'
import { ProfileComponent } from './profile/profile.component'

export const routes: Routes = [
  {
    path: '',
    title: 'App Home Page',
    component: AppComponent,
  },
  {
    path: 'profile',
    title: 'Profile Page',
    component: ProfileComponent,
  },
]
