import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewStudentComponent } from './view-student/view-student.component';
import { StudentGeneralInfoComponent } from './student-general-info/student-general-info.component';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ViewStudentComponent,
    StudentGeneralInfoComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, DropdownModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
