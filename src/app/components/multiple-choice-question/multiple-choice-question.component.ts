import { Component, QueryList, ViewChildren } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PreguntaMultipleComponent } from "../pregunta-multiple/pregunta-multiple.component";
import { OpcionRespuesta } from '../../dtos/OpcionRespuesta';

@Component({
    selector: 'app-multiple-choice-question',
    standalone: true,
    templateUrl: './multiple-choice-question.component.html',
    styleUrl: './multiple-choice-question.component.css',
    imports: [FormsModule, PreguntaMultipleComponent]
})
export class MultipleChoiceQuestionComponent {
  
    pregunta!: string;
    options!: string[];
    answer!: string;
    opciones: OpcionRespuesta[] = [
        { valor: 'A', seleccionado: false },
        { valor: 'B', seleccionado: false },
        { valor: 'C', seleccionado: false },
        { valor: 'D', seleccionado: false }
      ];
    seleccionada: number = -1;
    @ViewChildren(PreguntaMultipleComponent) childrenComponents!: QueryList<PreguntaMultipleComponent>;
    constructor() { }
  
    ngOnInit(): void {

    }
  
    onSubmit() {
  
    }

    seleccionarOpcion(index: String): void {
      this.opciones.forEach(opcion => {
        opcion.seleccionado = opcion.valor === index;
      });
    }
}
