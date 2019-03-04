import { Component, OnInit } from '@angular/core';

import { DisplayService } from "../_services/display.service";


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  constructor(
    private displayService: DisplayService,
  ) { }

  posts = [];
  post: any;
  post_groups: any;
  post_group: any;
  latest_posts: any;
  images = [];

  updating_status = false;
  updating_title: string;

  loading_status = true;

  ngOnInit() {
    this.displayService.initBoard(this)
  }
}
