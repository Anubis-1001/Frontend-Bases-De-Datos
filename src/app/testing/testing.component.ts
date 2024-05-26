import { Component } from '@angular/core';
import {
  OpMultipleUnicaResComponent
} from "../components/create-question/op-multiple-unica-res/op-multiple-unica-res.component";

@Component({
  selector: 'app-testing',
  standalone: true,
  imports: [OpMultipleUnicaResComponent],
  templateUrl: './testing.component.html',
  styleUrl: './testing.component.css'
})
export class TestingComponent {

}
