import { Component } from '@angular/core';
import { LeftBarComponent } from "../../components/left-bar/left-bar.component";

@Component({
    selector: 'app-default-view',
    standalone: true,
    templateUrl: './default-view.component.html',
    styleUrl: './default-view.component.css',
    imports: [LeftBarComponent]
})
export class DefaultViewComponent {

}
