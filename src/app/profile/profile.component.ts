import { Component, OnInit } from '@angular/core'

@Component({
  imports: [],
  selector: 'profile',
  templateUrl: './profile.component.html',
})
export class ProfileComponent {
  profileName = 'Poornima'
  profileAge = 30
  profileOccupation = 'Software Engineer'
  profileId = 1
  profileImage =
    'https://images.pexels.com/photos/24029951/pexels-photo-24029951/free-photo-of-case-and-earbuds.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
}
