import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MultipleChoiceQuestionComponent } from "../multiple-choice-question/multiple-choice-question.component";
import { UniqueAnswerQuestionComponent } from "../unique-answer-question/unique-answer-question.component";
import { TruFalseQuestionComponent } from "../tru-false-question/tru-false-question.component";
import { MatchingQuestionComponent } from "../matching-question/matching-question.component";
import { DocenteService } from '../../services/http-services/docente.service';

@Component({
    selector: 'app-select-tipo-prgeunta',
    standalone: true,
    templateUrl: './select-tipo-prgeunta.component.html',
    styleUrl: './select-tipo-prgeunta.component.css',
    imports: [CommonModule, FormsModule, MultipleChoiceQuestionComponent, UniqueAnswerQuestionComponent, TruFalseQuestionComponent, MatchingQuestionComponent]
})
export class SelectTipoPrgeuntaComponent {

  tiposPregunta!: string[];
  tipoPregunta!: string;
  value!: number;
  valuePregunta!: number;
  temas!: string[];
  temaSelected!: string;


  constructor(
    private docenteService: DocenteService,
  ) { }

  ngOnInit(): void {
    this.value = 0;
    this.valuePregunta = 1;
    this.tipoPregunta = 'Multiple choice';
    this.tiposPregunta = ['Multiple choice', 'Unique answer','True/False', 'Matching'];
    this.temas = [];
    this.loadTemas();
  }

  onChange(event: any) {
    this.valuePregunta = event.target.value;
  }

  loadTemas() {
   this.docenteService.getAllTemas().subscribe(
      (data) => {
        data.respuesta.forEach((element: any) => {
          this.temas.push(element.titulo);
          console.log(element.titulo);
        });

      },
      (error) => {
        console.log(error);
      }
    );
  }


}
