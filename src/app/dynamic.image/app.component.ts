import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'dynamic-image',
  template: `
    <div class="flex flex-col gap-4">
      <p>Username: {{ username }}</p>
      <p>Preferred Framework: Angular</p>
      <div class="image-container" class="relative h-20 w-20">
        <img
          priority
          ngSrc="https://images.pexels.com/photos/17810103/pexels-photo-17810103/free-photo-of-earphones-in-charging-case.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          fill
        />
      </div>

      <ul class="flex gap-4">
        <li class="flex gap-2">
          Static Image:
          <img ngSrc="/favicon.ico" alt="Angular logo" width="32" height="32" />
        </li>
        <li class="flex gap-2">
          Dynamic Image:
          <img [ngSrc]="logoUrl" [alt]="logoAlt" width="32" height="32" />
        </li>
      </ul>
    </div>
  `,
  imports: [NgOptimizedImage],
})
export class DynamicImageComponent {
  logoUrl = '/favicon.ico';
  logoAlt = 'Angular logo';
  username = 'youngTech';
}
