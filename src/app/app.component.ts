import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from './page/header/header.component';
import { FooterComponent } from './page/footer/footer.component';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit{

  title = '';

  ngOnInit(): void {
   this.title = environment.APP_NAME;
  }

}
