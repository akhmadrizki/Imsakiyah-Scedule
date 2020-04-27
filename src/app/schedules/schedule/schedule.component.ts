import { Component, OnInit } from '@angular/core';
import { ScheduleService } from 'src/app/shared/schedule.service';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  constructor(private service : ScheduleService,
    private firestore:AngularFirestore) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form? : NgForm){
    if(form != null)
      form.resetForm();
    this.service.formData = {
      id : null,
      day: '',
      date: '',
      imsak: '',
      subuh: '',
      terbit: '',
      dzuhur: '',
      ashar: '',
      maghrib: '',
      isya: ''
    }
  }

  onSubmit(form:NgForm){
    let data = form.value;
    this.firestore.collection('schedules').add(data);
    this.resetForm(form);
  }

}
