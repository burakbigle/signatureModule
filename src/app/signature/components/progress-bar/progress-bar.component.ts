import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { Observable, of as observableOf, interval } from 'rxjs';
import { map, take, delay, withLatestFrom, finalize, tap } from 'rxjs/operators';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements AfterViewInit {

  timer = 0;

  delayedProgress$ = this.loader.progress$.pipe(
    delay(1000),
    withLatestFrom(this.loader.progress$),
    map(v => v[1]),
  );


  ngAfterViewInit(): void {
    this.startHttpRequest();

  }

  constructor(
    private http: Http,
    private httpClient: HttpClient,
    public loader: LoadingBarService,


  ) { }



  startHttpRequest() {
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe();
  }

  startHttpClientRequest() {
    this.httpClient.get('https://jsonplaceholder.typicode.com/users').subscribe();
  }

  start() {
    this.loader.start(10);
  }

  set() {
    this.loader.set(50);
  }

  increment() {
    this.loader.increment(10);
  }

  complete() {
    this.loader.complete();
  }

  stop() {
    this.loader.stop();
  }

  startTimer() {
    interval(1000).pipe(
      take(3),
      tap(value => { this.timer = value + 1; }),
      finalize(() => this.loader.complete()),
    ).subscribe();

    // We're sure that subscription has been made, we can start loading bar service
    this.loader.start();
  }
}
