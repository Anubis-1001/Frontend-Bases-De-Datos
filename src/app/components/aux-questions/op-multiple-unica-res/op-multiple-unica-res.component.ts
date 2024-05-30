import {AfterViewInit, Component, ElementRef, Input} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-op-multiple-unica-res',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './op-multiple-unica-res.component.html',
  styleUrl: './op-multiple-unica-res.component.css'
})
export class OpMultipleUnicaResComponent {

  @Input() tema : string = '';

  constructor(private  el : ElementRef) {
  }


  readInputValues() {
    const inputElements = this.el.nativeElement.querySelectorAll('input');
  }

  questionForm = new FormGroup({
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
