import { Component, Input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-primary-button',
  styleUrl: './primary-button.scss',
  templateUrl: './primary-button.html',
})
export class PrimaryButton {
  @Input() variant: 'add' | 'checked' = 'add';

  get iconSrc(): string {
    return this.variant === 'add'
      ? '/assets/icons/primary-button-add.svg'
      : '/assets/icons/primary-button-check.svg';
  }
}
