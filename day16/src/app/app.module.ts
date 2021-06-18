import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BaseComponent } from './base/base.component';
import { LoginComponent } from './base/login/login.component';
import { RegisterComponent } from './base/register/register.component';
import { DatatableComponent } from './base/datatable/datatable.component';
import { FormsModule } from '@angular/forms';
import { UsersService } from './users.service';
import { HttpClientModule } from '@angular/common/http';
import { CloudinaryModule } from '@cloudinary/angular-5.x';
import * as  Cloudinary from 'cloudinary-core';
import { FileUploadModule } from 'ng2-file-upload';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

FullCalendarModule.registerPlugins([
  dayGridPlugin,
  interactionPlugin

]);


@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,
    LoginComponent,
    RegisterComponent,
    DatatableComponent,

  ],
  imports: [
    BrowserModule, CloudinaryModule.forRoot(Cloudinary, { cloud_name: 'dcfblx0ad', upload_preset: 'tpjcyrpa' }),
    AppRoutingModule, HttpClientModule,
    NgbModule, ReactiveFormsModule, FormsModule, FileUploadModule, FullCalendarModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
