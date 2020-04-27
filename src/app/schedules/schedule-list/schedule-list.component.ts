import { Component, OnInit } from '@angular/core';
import { ScheduleService } from 'src/app/shared/schedule.service';
import { Schedule } from 'src/app/shared/schedule.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-schedule-list',
  templateUrl: './schedule-list.component.html',
  styleUrls: ['./schedule-list.component.css']
})
export class ScheduleListComponent implements OnInit {

  list: Schedule[];
  constructor(
    private service: ScheduleService,
    private firestore: AngularFirestore,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.service.getSchedules().subscribe(actionArray => {
      this.list = actionArray.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        } as Schedule;
      })
    });
  }

  onDelete(id:string)
  {
    if(confirm("Are you sure?")){
      this.firestore.doc('schedules/'+id).delete();
      this.toastr.warning('Delete Success');
    }
  }

}
