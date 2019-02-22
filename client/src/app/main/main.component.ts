import { Component, OnInit } from '@angular/core'

import { DisplayService } from '../_services/display.service'


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(
    private displayService: DisplayService
  ) { }

  vids = ["f9k5fxouO1Q", "rko6cb_Gq0k", "BiIlQQAx70c", "vHsa4tUErPg"];

  cooperations: any[];
  project_groups: any[];
  research_groups: any[];

  latestShots = [
    {
      id: 1,
      active: "active",
      description: "Facilisis odio, dapibus ac justo acilisis gestinas."
    },
    {
      id: 2,
      active: "",
      description: "Facilisis odio, dapibus ac justo acilisis gestinas."
    },
    {
      id: 3,
      active: "",
      description: "Facilisis odio, dapibus ac justo acilisis gestinas."
    },
    {
      id: 4,
      active: "",
      description: "Facilisis odio, dapibus ac justo acilisis gestinas."
    }
  ];

  ngOnInit() {
    this.displayService.initMain(this)
  }

}
