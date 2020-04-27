import { Injectable } from '@angular/core';
import { Schedule } from './schedule.model';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
  formData :Schedule;

  constructor(private firestore:AngularFirestore) { }

  getSchedules(){
    return this.firestore.collection('schedules').snapshotChanges()
  }
}
