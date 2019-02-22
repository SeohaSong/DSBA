import { Component, OnInit } from '@angular/core'

import { UtilsService } from "../_services/utils.service"
import { DisplayService } from "../_services/display.service"


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor(
    private utilsService: UtilsService,
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
