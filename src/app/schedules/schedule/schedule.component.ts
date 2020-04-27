import { Component, OnInit } from '@angular/core';
import { ScheduleService } from 'src/app/shared/schedule.service';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  constructor(private service : ScheduleService,
    private firestore:AngularFirestore,
    private toastr : ToastrService) { }

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
      isya: '',
    }
  }

  onSubmit(form: NgForm){
    let data = Object.assign({}, form.value);
    delete data.id;
    this.firestore.collection('schedules').add(data);
    this.resetForm(form);
    this.toastr.success('Success Menambahkan', 'EMP. Register');
  }

}
