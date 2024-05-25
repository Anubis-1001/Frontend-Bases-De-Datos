import { Component } from '@angular/core';
import { BinaryComponent } from '../components/create-question/binary/binary.component';
import {CloseButtonComponent} from "../components/props/close-button/close-button.component";

@Component({
  selector: 'app-testing',
  standalone: true,
  imports: [BinaryComponent, CloseButtonComponent],
  templateUrl: './testing.component.html',
  styleUrl: './testing.component.css'
})
export class TestingComponent {

}
