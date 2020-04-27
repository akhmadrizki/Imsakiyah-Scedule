import { Injectable } from '@angular/core';
import { Schedule } from './schedule.model';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
  formData :Schedule;

  constructor() { }
}
