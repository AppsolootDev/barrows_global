import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  standalone: true,
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  navigateToLogin() {
    throw new Error('Method not implemented.');
  }

}
