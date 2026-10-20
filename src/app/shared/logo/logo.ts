import { Component, Input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-logo',
  styleUrl: './logo.scss',
  templateUrl: './logo.html',
})
export class Logo {
  @Input() variant: 'light' | 'dark' = 'light';
  get logoSrc(): string {
    return this.variant === 'light'
      ? '/assets/icons/logo-light.svg'
      : '/assets/icons/logo-dark.svg';
  }
}
