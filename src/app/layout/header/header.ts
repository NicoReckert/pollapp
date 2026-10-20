import { Component } from '@angular/core';
import { Logo } from '../../shared/logo/logo';

@Component({
  imports: [Logo],
  selector: 'app-header',
  styleUrl: './header.scss',
  templateUrl: './header.html',
})
export class Header {}
