import { Component, ViewChild, Input } from '@angular/core';
import { of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { DailyFinesCollectionComponent } from './daily-fines-collection/daily-fines-collection.component';
import { MonthlyExecutionComponent } from './monthly-execution/monthly-execution.component';
import { MonthlyFinesCollectionComponent } from './monthly-fines-collection/monthly-fines-collection.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  @Input()
  loading!: boolean;

  // @ViewChild('appDailyFinesCollection') appDailyFinesCollection: DailyFinesCollectionComponent;

    // afterDailyExecutionLoaded(){
    //     this.appDailyFinesCollection.someMethod();
    // }  



  title = 'angular-charts-app'; 
  obs$ = of(1).pipe(delay(500));

  obs2$ = of(0).pipe(delay(500));

  obs3$ = of(1).pipe(
    delay(500),
    map((x: any) => x()));
}
