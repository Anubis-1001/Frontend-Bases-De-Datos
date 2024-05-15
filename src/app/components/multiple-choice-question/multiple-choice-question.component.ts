import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-multiple-choice-question',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './multiple-choice-question.component.html',
  styleUrl: './multiple-choice-question.component.css'
})
export class MultipleChoiceQuestionComponent {
  
    pregunta!: string;
    options!: string[];
    answer!: string;
    constructor() { }
  
    ngOnInit(): void {

    }
  
    onSubmit() {
  
    }
}
