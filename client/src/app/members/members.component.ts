import { Component, OnInit } from '@angular/core';

import { DisplayService } from "../_services/display.service";


@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {

  constructor(
    private displayService: DisplayService
  ) { }

  totalStudents: any[]
  studentPairs: any[][]
  pageType: string
  loadingStatus = true
  types = ["overall", "professor", "students", "alumni"]

  checkPage: Function

  ngOnInit() {
    this.displayService.initMembers(this)
  }
}
