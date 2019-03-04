import { Component, OnInit } from '@angular/core'

import { DisplayService } from "../_services/display.service"


@Component({
  selector: 'app-researches',
  templateUrl: './researches.component.html',
  styleUrls: ['./researches.component.scss']
})
export class ResearchesComponent implements OnInit {

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
