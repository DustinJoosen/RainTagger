import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {PagePreviewComponent} from "./page/page-preview/page-preview.component";

@Component({
  selector: 'app-root',
  standalone: true,
    imports: [RouterOutlet, PagePreviewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'RainTagger';
}
