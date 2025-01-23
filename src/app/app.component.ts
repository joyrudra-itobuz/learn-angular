import { Component, Input } from '@angular/core';
import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [UserComponent],
})
export class AppComponent {
  message = 'Mouse Over to see the message';
  operatingSystems = [
    { id: 'win', name: 'Windows' },
    { id: 'osx', name: 'MacOS' },
    { id: 'linux', name: 'Linux' },
  ];
  users = [
    { id: 0, name: 'Sarah' },
    { id: 1, name: 'Amy' },
    { id: 2, name: 'Rachel' },
    { id: 3, name: 'Jessica' },
    { id: 4, name: 'Poornima' },
  ];
  isEditable = true;
  imageURL =
    'https://images.pexels.com/photos/24029951/pexels-photo-24029951/free-photo-of-case-and-earbuds.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';
  onMouseOver() {
    this.message = 'Way to go 🚀';
  }
  onMouseLeave() {
    this.message = 'Mouse Over to see the message';
  }
}
