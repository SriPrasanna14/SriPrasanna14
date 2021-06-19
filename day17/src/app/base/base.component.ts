import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cloudinary } from '@cloudinary/angular-5.x';
import { UsersService } from '../users.service';


@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})






export class BaseComponent implements OnInit {

  constructor(private router: Router, private cloudinary: Cloudinary, private userService: UsersService) { }
  datas: any = [];
  schemas: any = [];
  schemaHeader: any = [];
  progressItemSource: any = [];
  progressItemCompare: any = [];
  cardContentExpanded: any = [];
  field: any = [];
  ngOnInit(): void {

    this.getData();
    this.getSchema();
    this.appData();


  }
  log() {
    this.router.navigateByUrl('log');
  }
  reg() {
    this.router.navigateByUrl('reg');
  }
  getData() {
    this.userService.jsonData().subscribe(data => {
      this.datas = data;
      console.log(data);
    })

  }
  iconClass: any = '';
  jsonApp: any = [];
  appData() {
    this.userService.jsonApp().subscribe(data => {
      this.jsonApp = data;
      // this.iconClass = data.style.name;
      console.log(this.jsonApp);
    })
  }
  name: any = [];


  card() {
    this.router.navigateByUrl('log');

  }
  displayPermission(data: any) {
    this.name = data;
    this.userService.name = data;
    // console.log(data);
  }


  getSchema() {
    this.userService.jsonSchema().subscribe(data => {
      this.schemas = data.columns;
      console.log(data.columns);


      this.schemaHeader = data.cardView.header;
      this.progressItemSource = data.cardView.progressItemSource;
      this.progressItemCompare = data.cardView.progressItemCompare;
      this.cardContentExpanded = data.cardView.cardContentExpanded;
      this.field = data.cardView.fields;
      //console.log(this.cardContentExpanded);
    })
  }

}
