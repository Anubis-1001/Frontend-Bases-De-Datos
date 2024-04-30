import { Component } from '@angular/core';
import { LeftBarComponent } from "../../components/left-bar/left-bar.component";
import { NavBarComponent } from "../../components/nav-bar/nav-bar.component";
import { DefaultViewComponent } from "../default-view/default-view.component";

@Component({
    selector: 'app-pending-exams',
    standalone: true,
    templateUrl: './pending-exams.component.html',
    styleUrl: './pending-exams.component.css',
    imports: [LeftBarComponent, NavBarComponent, DefaultViewComponent]
})
export class PendingExamsComponent {

}
