import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css'],
})
export class ViewStudentComponent implements OnInit {
  selectedCar = 'Choose Term';
  termOptions = [
    { name: '202127: AS-Active(HS-BS-RHM)' },
    { name: '202127: AS-Active(HS-BS-RHS)' },
    { name: '202127: AS-Active(HS-BS-RHD)' },
    { name: '202127: AS-Active(HS-BS-RHE)' },
    { name: '202127: AS-Active(HS-BS-RHO)' },
  ];

  student = {
    lastName: 'Ganus',
    firstName: 'Megan Emily',
    rNum: 'R11585600',
    effTerm: 202127,
    email: 'megan.ganus@ttu.edu',
    classification: 'JR - Junior',
    ttuGpa: 3.508,
    currMaj: 'RHIM',
    expGrad: '05/14/2022',
    status: 'AS-Active',
    site: {
      siteName: 'TLB-Lubbock Texas Tech University',
      siteSum: [
        { name: 'Sum TDE', val: 15.0 },
        { name: 'Sum TLB', val: 85.0 },
        { name: 'Sum Other', val: 0.0 },
      ],
    },
    campus: {
      campName: 'TLB-Lubbock TTU',
      phyCampCnt: 2,
      enrllByCamp: 'TPD(3)[ONLIN], TLB(2)[HYBRD]',
    },
  };
  constructor() {}

  ngOnInit(): void {}
}
