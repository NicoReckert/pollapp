import { Component } from '@angular/core';
import { Logo } from '../../shared/logo/logo';
import { PrimaryButton } from '../../shared/primary-button/primary-button';
import { SecondaryButton } from '../../shared/secondary-button/secondary-button';

@Component({
  imports: [Logo, PrimaryButton, SecondaryButton],
  selector: 'app-header',
  styleUrl: './header.scss',
  templateUrl: './header.html',
})
export class Header {}
