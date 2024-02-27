import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'lib-text',
  standalone: true,
  templateUrl: './text.component.html',
  styleUrl: './text.component.css',
})
export class TextComponent {
  @Input({ required: true }) size!: number;

  @HostBinding('style.--ngxpert-avvvatars-font-size') get fontSize() {
    return `${Math.round((this.size / 100) * 37)}px`;
  }

  @HostBinding('style.--ngxpert-avvvatars-color')
  @Input({ required: true })
  color!: string;
}
