import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';
import { HttpClient } from '@angular/common/http';
import { CalendarOptions } from '@fullcalendar/angular';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    dateClick: this.handleDateClick.bind(this),
    events: [
      { title: 'event-1', date: '2021-06-19' },
      { title: 'event 2', date: '2019-04-02' }
    ]
  };
  handleDateClick(arg: any) {
    alert('date click! ' + arg.dateStr)
    console.log('hello');
  }


  image = null;


  constructor(private http: HttpClient, private userService: UsersService) { }

  // onSelected(event: any) {
  //   this.image = event;
  //   console.log(this.image);
  //   this.userService.image = this.image;
  // }

  // upload() {
  //   this.uploader = this.userService.putData().subscribe(data => {
  //     console.log(data);
  //   })
  // }

}






