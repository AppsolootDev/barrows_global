import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Segment, segments } from '../../entity/segments';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { resetSegment, setSpin } from '../../spin-state-store/spin.action';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule, HttpHeaders, HttpResponse } from '@angular/common/http';
import { imgData } from '../../entity/imgData';
import { getImageService } from '../../services/get-images.service';
import { Observable } from 'rxjs';
import { HostListener } from '@angular/core';


@Component({
  selector: 'app-game-page',
  standalone: true,
  templateUrl: './game-page.component.html',
  styleUrl: './game-page.component.scss',
  imports: [CommonModule, HttpClientModule]
})

export class GamePageComponent implements OnInit,AfterViewInit {


  constructor(
    private store: Store,
    private http: HttpClient,
    private router: Router,
    private getImage: getImageService
  ) { }

  @HostListener('window:popstate', ['$event'])
  onPopState() {
    location.reload()
  }

  selectedSegment: Segment | undefined;
  isSpinning: boolean = false;
  spinTimeout: any;
  data: imgData = {
    id: '',
    author: '',
    width: 0,
    height: 0,
    url: '',
    download_url: ''
  };
  authors: string[] = [];
  content$ = Observable<HttpResponse<imgData>>;

  urlRequest() {
    for(let i=0;i <=9;i++) {
      let author = '';
      this.getImage.getData(this.getSegments()[i].description?.['url']).subscribe(data =>{
        if(data.ok) {
          return author = data.body?.author || 'Unknown';
        } else {
          return 'Joe';
        }
      });
      this.authors.push(author);
    }
    return this.authors;
  }

  ngOnInit(): void {
    this.selectedSegment = this.getSelectedSegment();
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.urlRequest();
    console.log('test',this.authors);
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
