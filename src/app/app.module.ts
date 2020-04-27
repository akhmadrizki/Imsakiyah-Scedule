import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
// import { from } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SchedulesComponent } from './schedules/schedules.component';
import { ScheduleComponent } from './schedules/schedule/schedule.component';
import { ScheduleListComponent } from './schedules/schedule-list/schedule-list.component';
import { ScheduleService } from './shared/schedule.service';

@NgModule({
  declarations: [
    AppComponent,
    SchedulesComponent,
    ScheduleComponent,
    ScheduleListComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [ScheduleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
