import { CommentsComponent } from '../comments/comments.component'
import { DynamicImageComponent } from '../dynamic.image/app.component'
import { UserComponent } from '../user/user.component'
import { Component } from '@angular/core'

@Component({
  selector: 'home-root',
  templateUrl: './home.component.html',
  imports: [UserComponent, CommentsComponent, DynamicImageComponent],
})
export class HomeComponent {
  items = [1]
  message = 'Mouse Over to see the message'
  operatingSystems = [
    { id: 'win', name: 'Windows' },
    { id: 'osx', name: 'MacOS' },
    { id: 'linux', name: 'Linux' },
  ]
  users = [
    { id: 0, name: 'Sarah' },
    { id: 1, name: 'Amy' },
    { id: 2, name: 'Rachel' },
    { id: 3, name: 'Jessica' },
    { id: 4, name: 'Poornima' },
  ]
  isEditable = true
  imageURL =
    'https://images.pexels.com/photos/24029951/pexels-photo-24029951/free-photo-of-case-and-earbuds.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'

  onMouseOver() {
    this.message = 'Way to go 🚀'
  }
  onMouseLeave() {
    this.message = 'Mouse Over to see the message'
  }
  addItem(item: number) {
    this.items.push(item)
  }
}
