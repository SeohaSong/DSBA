import { Component, OnInit } from '@angular/core'

import { DisplayService } from "../_services/display.service"


@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.scss']
})
export class PublicationsComponent implements OnInit {

  constructor(
    private displayService: DisplayService
  ) { }

  publications: any[]

  ngOnInit() {
    this.displayService.initPublications(this)
  }

}
