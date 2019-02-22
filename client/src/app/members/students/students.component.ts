import { Component, OnInit, Input } from '@angular/core';

import { UtilsService } from "../../_services/utils.service";


@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss'],
})
export class StudentsComponent implements OnInit {

  constructor(
    private utilsService: UtilsService
  ) { }

  @Input() pageType: string;
  @Input() studentPairs: any[];

  beautifyAdmission = this.utilsService.beautifyAdmission;

  ngOnInit() { }
}
