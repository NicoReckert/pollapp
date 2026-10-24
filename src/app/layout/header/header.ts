import { Component } from '@angular/core';
import { Logo } from '../../shared/logo/logo';
import { PrimaryButton } from '../../shared/primary-button/primary-button';
import { SecondaryButton } from '../../shared/secondary-button/secondary-button';
import { FilterButton } from '../../shared/filter-button/filter-button';

@Component({
  imports: [Logo, PrimaryButton, SecondaryButton, FilterButton],
  selector: 'app-header',
  styleUrl: './header.scss',
  templateUrl: './header.html',
})
export class Header {}
