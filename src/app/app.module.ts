import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartsModule } from 'ng2-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DailyExecutionComponent } from './daily-execution/daily-execution.component';
import { DailyFinesCollectionComponent } from './daily-fines-collection/daily-fines-collection.component';
import { MonthlyExecutionComponent } from './monthly-execution/monthly-execution.component';
import { MonthlyFinesCollectionComponent } from './monthly-fines-collection/monthly-fines-collection.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { WithLoadingPipe } from './with-loading.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DailyExecutionComponent,
    DailyFinesCollectionComponent,
    MonthlyExecutionComponent,
    MonthlyFinesCollectionComponent,
    HeaderComponent,
    FooterComponent,
    WithLoadingPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
