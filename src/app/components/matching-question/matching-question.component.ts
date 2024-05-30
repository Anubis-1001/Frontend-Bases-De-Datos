import {Component, Input} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-matching-question',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './matching-question.component.html',
  styleUrl: './matching-question.component.css'
})
export class MatchingQuestionComponent {

  @Input() tema : string = '';

  emparejadas:String[] = [];
  pregunta!:String;
  respuesta!:String;

  constructor() { }

  emparejar(){
    this.emparejadas.push(this.pregunta + " $ " + this.respuesta);
  }

}
