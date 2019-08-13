import { Component, OnInit } from '@angular/core'

import { DisplayService } from "../_services/display.service"


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  constructor(
    private displayService: DisplayService,
  ) { }

  post: any
  posts = []
  post_group: any
  post_groups: any
  imgs = []
  latest_posts: any
  loading_status = true
  updating_title: string
  updating_status = false

  turnPage: Function

  ngOnInit() {
    this.displayService.initBoard(this)
  }
}
