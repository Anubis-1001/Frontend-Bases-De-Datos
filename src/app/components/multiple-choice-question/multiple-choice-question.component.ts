import { Component, Input, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-multiple-choice-question',
  standalone: true,
  imports: [],
  templateUrl: './multiple-choice-question.component.html',
  styleUrl: './multiple-choice-question.component.css',
})
export class MultipleChoiceQuestionComponent {
  @Input('statement') statement!: string;
  @Input('choices') choices!: string[];
}
