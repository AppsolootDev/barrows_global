import { RequestRedirect } from 'undici-types/fetch';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { SegmentGroup, selectGroupedSegmentEntries } from '../../spin-state-store/spin.selectors';
import { Observable } from 'rxjs';
import { resetSegment, resetSpin, setSpin } from '../../spin-state-store/spin.action';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-results',
  standalone: false,
  templateUrl: './results.component.html',
  styleUrl: './results.component.scss',
})

export class ResultsComponent implements OnInit {

  selectedSegment$: Observable<SegmentGroup[]>;

  constructor(
    private store: Store,
    private router: Router,
    private location: Location
  ) {
    this.selectedSegment$ = store.select(selectGroupedSegmentEntries);
  }

  ngOnInit(): void {
  }

  clearAllSegments() {
    this.store.dispatch(resetSegment());
  }


  more(entry: SegmentGroup) {
    this.store.dispatch(setSpin(entry.segment));
  }

  less(entry: SegmentGroup) {
    this.store.dispatch(resetSpin(entry.segment));
  }

  redirect(){
    this.clearAllSegments();
    this.router.navigateByUrl('/game');
    // this.location.back();
  }

}
