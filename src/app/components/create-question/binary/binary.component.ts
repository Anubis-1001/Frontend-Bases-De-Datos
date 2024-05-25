import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {CloseButtonComponent} from "../../props/close-button/close-button.component";

@Component({
  selector: 'app-binary',
  standalone: true,
  imports: [ReactiveFormsModule, CloseButtonComponent],
  templateUrl: './binary.component.html',
  styleUrl: './binary.component.css',
})
export class BinaryComponent {

  questionForm = new FormGroup({
    statement: new FormControl(''),
    answer: new FormControl(''),
    public: new FormControl('')
  });


    onSubmit() {
      console.warn(this.questionForm.value);
    }

}
