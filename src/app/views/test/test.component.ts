import { Component } from '@angular/core';
import {AgregarPreguntaComponent} from "../agregar-pregunta/agregar-pregunta.component";
import {UniqueAnswerQuestionComponent} from "../../components/unique-answer-question/unique-answer-question.component";

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [
    AgregarPreguntaComponent,
    UniqueAnswerQuestionComponent
  ],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {

}
