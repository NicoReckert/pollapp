import { Component, Input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-survey-status',
  styleUrl: './survey-status.scss',
  templateUrl: './survey-status.html',
})
export class SurveyStatus {
  @Input() variant: 'published' | 'draft' = 'published';

  get statusText(): string {
    return this.variant === 'published' ? 'Published' : 'Draft';
  }

  get statusClass(): string {
    return this.variant === 'published'
      ? 'survey-status--published'
      : 'survey-status--draft';
  }
}
