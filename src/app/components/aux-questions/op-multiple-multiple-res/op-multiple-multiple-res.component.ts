import {Component} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-op-multiple-multiple-res',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './op-multiple-multiple-res.component.html',
  styleUrl: './op-multiple-multiple-res.component.css'
})
export class OpMultipleMultipleResComponent {
  questionForm: FormGroup = new FormGroup({
    statement: new FormControl(''),
    res1: new FormControl(''),
    res2: new FormControl(''),
    res3: new FormControl(''),
    public: new FormControl(''),
    res_correcta: new FormControl('')
  });


  onSubmit() {
    console.log(this.questionForm.value);
  }
}
