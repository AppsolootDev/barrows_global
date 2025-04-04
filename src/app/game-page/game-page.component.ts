import { Component, OnInit } from '@angular/core';
import { Segment } from '../entity/segments';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { resetSegment, setSpin } from '../spin-state-store/spin.action';
import { Router } from '@angular/router';

export const segments = [
  { id: '1',
    name: 'Segment 1',
    value: 10,
    imageUrl: 'https://picsum.photos/200/301',
    isSelected: false,
    content: "<button class='btn button-primary'>Clicker 1</test>",
    isActive: false,
    description: 'Uno',
  },
  { id: '2',
    name: 'Segment 2',
    value: 20,
    imageUrl: 'https://picsum.photos/200/302',
    isSelected: false,
    content: "<button class='btn button-primary'>Clicker 1</test>",
    isActive: false,
    description: 'Dos'
  },
  { id: '3',
    name: 'Segment 3',
    value: 30,
    imageUrl: 'https://picsum.photos/200/303',
    isSelected: false,
    content: "<button class='btn button-primary'>Clicker 1</test>",
    isActive: false,
    description: 'Tres'
  },
  { id: '4',
    name: 'Segment 4',
    value: 40,
    imageUrl: 'https://picsum.photos/200/304',
    isSelected: false,
    content: "<button class='btn button-primary'>Clicker 1</test>",
    isActive: false,
    description: 'Cuatro'
  },
  { id: '5',
    name: 'Segment 5',
    value: 50,
    imageUrl: 'https://picsum.photos/200/305',
    isSelected: false,
    content: "<button class='btn button-primary'>Clicker 1</test>",
    isActive: false,
    description: 'Cinco'
  },
  { id: '6',
    name: 'Segment 6',
    value: 60,
    imageUrl: 'https://picsum.photos/200/306',
    isSelected: false,
    content: "<button class='btn button-primary'>Clicker 1</test>",
    isActive: false,
    description: 'Seis'
  },
  { id: '7',
    name: 'Segment 7',
    value: 70,
    imageUrl: 'https://picsum.photos/200/307',
    isSelected: false,
    content: "<button class='btn button-primary'>Clicker 1</test>",
    isActive: false,
    description: 'Siete'
  },
  { id: '8',
    name: 'Segment 8',
    value: 80,
    imageUrl: 'https://picsum.photos/200/308',
    isSelected: false,
    content: "<button class='btn button-primary'>Clicker 1</test>",
    isActive: false,
    description: 'Ocho'
  },
  { id: '9',
    name: 'Segment 9',
    value: 90,
    imageUrl: 'https://picsum.photos/200/309',
    isSelected: false,
    content: '<button class="btn button-primary">Clicker 1</test>',
    isActive: false,
    description: 'Nueve'
  },
  { id: '10',
    name: 'Segment 10',
    value: 100,
    imageUrl: 'https://picsum.photos/200/310',
    isSelected: false,
    content: "<button class='btn button-primary'>Clicker 1</test>",
    isActive: false,
    description: 'Diez'
  }
]

@Component({
  selector: 'app-game-page',
  standalone: true,
  templateUrl: './game-page.component.html',
  styleUrl: './game-page.component.scss',
  imports: [CommonModule]
})

export class GamePageComponent implements OnInit {


  selectedSegment: Segment | undefined;
  isSpinning: boolean = false;
  spinTimeout: any;

  constructor(private store: Store,private router: Router) { }

  ngOnInit(): void {
    this.selectedSegment = this.getSelectedSegment();
  }

  getSelectedSegment(): Segment {
    return this.getSegments().find(segment => segment.isSelected) || this.getSegments()[0];
  }

  spin() {
    this.isSpinning = true;
    this.spinTimeout = setTimeout(() => {
      this.isSpinning = false;
      this.selectedSegment = this.getSelectedSegment();
    }, 3000);
  }

  stopSpin() {
    clearTimeout(this.spinTimeout);
    this.isSpinning = false;
  }

  public getSegments() : Segment[] {
    return segments;
  }

  redirctToResults() {
    this.router.navigateByUrl('/results');
  }

  selectSegment(segment: Segment) {
    this.store.dispatch(resetSegment());
    this.store.dispatch(setSpin(segment));
    this.redirctToResults();
  }

  public selectRandomSegment(index?: number){
    if(index==0){
    function getRandomInt(max: number) {
      return Math.floor(Math.random() * max);
    }
    const randomIndex = getRandomInt(this.getSegments().length);
    console.log(randomIndex);
    this.store.dispatch(setSpin(this.getSegments()[randomIndex]));
    }
    this.store.dispatch(setSpin(this.getSegments()[2]));
    this.redirctToResults();
  }


  displayContent(segment: Segment) {
    return segment.content;
  }

}
