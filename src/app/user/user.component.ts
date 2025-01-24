import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  template: `
    <div class="flex flex-col gap-4">
      <p>The user's name is {{ occupation }}</p>
      <button
        class="w-fit cursor-pointer hover:opacity-65"
        (click)="addItemEvent()"
      >
        Add Item
      </button>
    </div>
  `,
})
export class UserComponent {
  @Input() occupation = '';
  @Output() incrementCountEvent = new EventEmitter<number>();
  count = 1;

  addItemEvent() {
    this.count++;
    this.incrementCountEvent.emit(this.count);
  }
}
