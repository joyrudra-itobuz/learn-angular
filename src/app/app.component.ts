import { Component } from '@angular/core'
import { UserComponent } from './user/user.component'
import { CommentsComponent } from './comments/comments.component'
import { DynamicImageComponent } from './dynamic.image/app.component'
import { RouterLink, RouterOutlet } from '@angular/router'
import { ProfileComponent } from './profile/profile.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, RouterLink],
})
export class AppComponent {}
