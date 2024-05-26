import {Component} from '@angular/core';
import {CloseButtonComponent} from "../../props/close-button/close-button.component";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-ordenar-conceptos',
  standalone: true,
  imports: [
    CloseButtonComponent,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './ordenar-conceptos.component.html',
  styleUrl: './ordenar-conceptos.component.css'
})
export class OrdenarConceptosComponent {
  questionForm: FormGroup = new FormGroup({
    statement: new FormControl(''),
    res: new FormControl(''),
    public : new FormControl('')
  });

// Toma la respuesta y la divide en elementos separados por comas.
// Luego, elimina los espacios al principio y al final de cada elemento.
  splitAndCleanText(texto: string): string[] {
    // Dividir el texto usando comas como separador
    const elementos = texto.split(",");
    // Limpiar cada elemento eliminando espacios al principio y al final
    const elementosLimpios = elementos.map(elemento => elemento.trim());
    return elementosLimpios;
  }


  onSubmit() {
    let texto = this.questionForm.get('res')?.value;
    let elementos = this.splitAndCleanText(texto);
    console.log(elementos);
  }
}
