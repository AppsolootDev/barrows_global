import { Component } from '@angular/core';
import { HeaderComponent } from './page/header/header.component';
import { FooterComponent } from './page/footer/footer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'spinner-segment-result';
}
