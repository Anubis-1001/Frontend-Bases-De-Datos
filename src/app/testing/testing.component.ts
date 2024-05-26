import { Component } from '@angular/core';
import {
  OpMultipleUnicaResComponent
} from "../components/create-question/op-multiple-unica-res/op-multiple-unica-res.component";
import {
  OpMultipleMultipleResComponent
} from "../components/create-question/op-multiple-multiple-res/op-multiple-multiple-res.component";

@Component({
  selector: 'app-testing',
  standalone: true,
  imports: [OpMultipleUnicaResComponent, OpMultipleMultipleResComponent],
  templateUrl: './testing.component.html',
  styleUrl: './testing.component.css'
})
export class TestingComponent {

}
