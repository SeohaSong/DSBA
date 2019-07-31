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
  idx2datas: any[]
  idx2pages: any[]

  ngOnInit() {
    this.displayService.initSlides(this)
  }
}
