import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewStudentComponent } from './view-student/view-student.component';
import { StudentGeneralInfoComponent } from './student-general-info/student-general-info.component';
const routes: Routes = [
  {
    path: '',
    component: ViewStudentComponent,
  },
  {
    path: 'student',
    component: ViewStudentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
