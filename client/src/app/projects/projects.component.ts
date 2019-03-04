import { Component, OnInit } from '@angular/core'

import { DisplayService } from "../_services/display.service"


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor(
    private displayService: DisplayService
  ) { }

  datas: any[]
  dataGroups: any[]

  ngOnInit() {
    this.displayService.initSlides(this)
  }

  isPagination() {
    return false
  }

}
