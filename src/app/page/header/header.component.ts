import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectCountSegment, selectTotalValue } from '../../spin-state-store/spin.selectors';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  imports: [CommonModule],
})
export class HeaderComponent implements OnInit {

  countProducts$: Observable<number>;
  totalPrices$: Observable<number>;

  constructor(private store: Store) {
    this.countProducts$ = store.select(selectCountSegment);
    this.totalPrices$   = store.select(selectTotalValue);
  }

  ngOnInit(): void {
    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    // Add 'implements OnInit' to the class.
  }


}
