import { Component } from '@angular/core';
import { of } from 'rxjs';
import { delay, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-charts-app'; 
  obs$ = of(1).pipe(delay(500));

  obs2$ = of(0).pipe(delay(500));

  obs3$ = of(1).pipe(
    delay(500),
    map((x: any) => x()));
}
