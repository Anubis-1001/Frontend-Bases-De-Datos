import { Component } from '@angular/core';
import { LeftBarComponent } from "../../components/left-bar/left-bar.component";
import { NavBarComponent } from "../../components/nav-bar/nav-bar.component";
import { DueExamsComponent } from "../../components/due-exams/due-exams.component";
import { DoneExamsComponent } from "../../components/done-exams/done-exams.component";

@Component({
    selector: 'app-exams',
    standalone: true,
    templateUrl: './exams.component.html',
    styleUrl: './exams.component.css',
    imports: [LeftBarComponent, NavBarComponent, DueExamsComponent, DoneExamsComponent]
})
export class ExamsComponent {

}