import { Component } from '@angular/core';
import { Logo } from '../../shared/logo/logo';
import { PrimaryButton } from '../../shared/primary-button/primary-button';
import { SecondaryButton } from '../../shared/secondary-button/secondary-button';
import { FilterButton } from '../../shared/filter-button/filter-button';
import { SurveyStatus } from '../../shared/survey-status/survey-status';
import { Delete } from '../../shared/delete/delete';
import { Edit } from '../../shared/edit/edit';
import { CheckBox } from '../../shared/check-box/check-box';

@Component({
  imports: [Logo, PrimaryButton, SecondaryButton, FilterButton, SurveyStatus, Delete, Edit, CheckBox],
  selector: 'app-header',
  styleUrl: './header.scss',
  templateUrl: './header.html',
})
export class Header { }
