import { Routes } from '@angular/router'
import { ProfileComponent } from './profile/profile.component'
import { HomeComponent } from './home/home.component'

export const routes: Routes = [
  {
    path: '',
    title: 'App Home Page',
    component: HomeComponent,
  },
  {
    path: 'profile',
    title: 'Profile Page',
    component: ProfileComponent,
  },
]
